"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X, Camera, Sparkles } from "lucide-react"

interface UploadModalProps {
  isOpen: boolean
  onClose: () => void
  onUpload: (item: any) => void
}

const suggestedTags = [
  "vintage",
  "designer",
  "casual",
  "formal",
  "athletic",
  "winter",
  "summer",
  "denim",
  "leather",
  "cotton",
]
const conditions = ["Like New", "Excellent", "Good", "Fair"]
const sizes = ["XS", "S", "M", "L", "XL", "XXL", "6", "7", "8", "9", "10", "11", "12"]

export function UploadModal({ isOpen, onClose, onUpload }: UploadModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    size: "",
    condition: "",
    images: [] as string[],
    tags: [] as string[],
  })
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string
        setFormData((prev) => ({
          ...prev,
          images: [...prev.images, imageUrl],
        }))

        // Simulate AI analysis
        setIsAnalyzing(true)
        setTimeout(() => {
          // Auto-suggest tags and details based on "AI analysis"
          const autoTags = ["casual", "cotton", "vintage"]
          const autoTitle = file.name.includes("jacket")
            ? "Stylish Jacket"
            : file.name.includes("shoe")
              ? "Comfortable Shoes"
              : "Fashion Item"

          setFormData((prev) => ({
            ...prev,
            title: prev.title || autoTitle,
            tags: [...new Set([...prev.tags, ...autoTags])],
          }))
          setIsAnalyzing(false)
        }, 2000)
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const addTag = (tag: string) => {
    if (!formData.tags.includes(tag)) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }))
    }
  }

  const removeTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.size && formData.condition && formData.images.length > 0) {
      onUpload(formData)
      setFormData({
        title: "",
        description: "",
        size: "",
        condition: "",
        images: [],
        tags: [],
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Post New Item
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <Label className="text-sm font-medium">Photos</Label>
            <div className="mt-2">
              {formData.images.length === 0 ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <Label htmlFor="image-upload" className="cursor-pointer">
                      <span className="text-blue-600 hover:text-blue-500 font-medium">Upload photos</span>
                      <span className="text-gray-500"> or drag and drop</span>
                    </Label>
                    <Input
                      id="image-upload"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 10MB</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2 h-6 w-6 p-0"
                        onClick={() => removeImage(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center">
                    <Label htmlFor="image-upload-more" className="cursor-pointer text-center">
                      <Upload className="mx-auto h-6 w-6 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Add more</span>
                      <Input
                        id="image-upload-more"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </Label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* AI Analysis Status */}
          {isAnalyzing && (
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-blue-700">
                  <Sparkles className="h-4 w-4 animate-spin" />
                  <span className="text-sm">AI is analyzing your item...</span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Item Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Item Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., Vintage Denim Jacket"
                required
              />
            </div>

            <div>
              <Label htmlFor="size">Size *</Label>
              <Select
                value={formData.size}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, size: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="condition">Condition *</Label>
            <Select
              value={formData.condition}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, condition: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                {conditions.map((condition) => (
                  <SelectItem key={condition} value={condition}>
                    {condition}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Describe your item, any flaws, styling tips, etc."
              rows={3}
            />
          </div>

          {/* Tags */}
          <div>
            <Label>Tags</Label>
            <div className="mt-2">
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {formData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      #{tag}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => removeTag(tag)} />
                    </Badge>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {suggestedTags
                  .filter((tag) => !formData.tags.includes(tag))
                  .map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={() => addTag(tag)}
                    >
                      #{tag}
                    </Badge>
                  ))}
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              disabled={!formData.title || !formData.size || !formData.condition || formData.images.length === 0}
            >
              Post Item
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
