"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Upload, X, Camera, Sparkles, MapPin, Clock, ArrowLeft } from "lucide-react"

const categories = ["Tops", "Bottoms", "Dresses", "Outerwear", "Shoes", "Accessories", "Activewear", "Formal"]

const brands = ["Nike", "Adidas", "Zara", "H&M", "Uniqlo", "Urban Outfitters", "Forever 21", "Levi's", "Gap", "Other"]

const suggestedTags = [
  "vintage",
  "designer",
  "casual",
  "formal",
  "athletic",
  "winter",
  "summer",
  "spring",
  "fall",
  "denim",
  "leather",
  "cotton",
  "silk",
  "wool",
  "trendy",
  "classic",
  "boho",
  "minimalist",
]

const conditions = [
  { value: "like-new", label: "Like New", description: "Barely worn, no visible wear" },
  { value: "excellent", label: "Excellent", description: "Minor signs of wear, great condition" },
  { value: "good", label: "Good", description: "Some wear but still looks great" },
  { value: "fair", label: "Fair", description: "Noticeable wear but functional" },
]

const sizes = {
  clothing: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
  shoes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13"],
  accessories: ["One Size", "S", "M", "L"],
}

export default function UploadPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [formData, setFormData] = useState({
    // Basic Info
    title: "",
    description: "",
    category: "",
    brand: "",
    size: "",
    condition: "",

    // Images
    images: [] as string[],

    // Details
    tags: [] as string[],
    color: "",
    material: "",

    // Swap Preferences
    lookingFor: [] as string[],
    preferredSizes: [] as string[],
    meetupPreference: "campus", // campus, dorm, public
    availability: "flexible", // flexible, weekdays, weekends

    // Additional
    isNegotiable: true,
    allowPartialTrade: false,
  })

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
          // Auto-suggest based on image analysis
          const autoTags = ["casual", "cotton"]
          const autoColor = "Blue"
          const autoCategory = "Tops"

          setFormData((prev) => ({
            ...prev,
            tags: [...new Set([...prev.tags, ...autoTags])],
            color: prev.color || autoColor,
            category: prev.category || autoCategory,
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

  const addLookingFor = (category: string) => {
    if (!formData.lookingFor.includes(category)) {
      setFormData((prev) => ({
        ...prev,
        lookingFor: [...prev.lookingFor, category],
      }))
    }
  }

  const removeLookingFor = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      lookingFor: prev.lookingFor.filter((c) => c !== category),
    }))
  }

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Submitting:", formData)
    router.push("/") // Redirect to home page
  }

  const getSizeOptions = () => {
    if (formData.category === "Shoes") return sizes.shoes
    if (formData.category === "Accessories") return sizes.accessories
    return sizes.clothing
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Post New Item</h1>
            <p className="text-gray-600">Share your clothes with the campus community</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && <div className={`w-16 h-1 mx-2 ${currentStep > step ? "bg-blue-600" : "bg-gray-200"}`} />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Step 1: Photos & Basic Info */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Photos & Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Image Upload */}
                  <div>
                    <Label className="text-sm font-medium">Photos *</Label>
                    <p className="text-xs text-gray-500 mb-3">
                      Add up to 8 photos. First photo will be the main image.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {formData.images.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          {index === 0 && <Badge className="absolute top-2 left-2 text-xs">Main</Badge>}
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeImage(index)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}

                      {formData.images.length < 8 && (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center h-32 hover:border-blue-400 transition-colors">
                          <Label htmlFor="image-upload" className="cursor-pointer text-center">
                            <Upload className="mx-auto h-6 w-6 text-gray-400 mb-2" />
                            <span className="text-sm text-gray-500">Add Photo</span>
                            <Input
                              id="image-upload"
                              type="file"
                              multiple
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                            />
                          </Label>
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
                          <span className="text-sm">AI is analyzing your item and suggesting details...</span>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Item Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                        placeholder="e.g., Vintage Denim Jacket"
                      />
                    </div>

                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="brand">Brand</Label>
                      <Select
                        value={formData.brand}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, brand: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                        <SelectContent>
                          {brands.map((brand) => (
                            <SelectItem key={brand} value={brand}>
                              {brand}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                          {getSizeOptions().map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="color">Color</Label>
                      <Input
                        id="color"
                        value={formData.color}
                        onChange={(e) => setFormData((prev) => ({ ...prev, color: e.target.value }))}
                        placeholder="e.g., Navy Blue"
                      />
                    </div>

                    <div>
                      <Label htmlFor="material">Material</Label>
                      <Input
                        id="material"
                        value={formData.material}
                        onChange={(e) => setFormData((prev) => ({ ...prev, material: e.target.value }))}
                        placeholder="e.g., 100% Cotton"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your item, styling tips, any flaws, etc."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Condition & Tags */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Condition & Tags</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Condition */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Condition *</Label>
                    <RadioGroup
                      value={formData.condition}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, condition: value }))}
                      className="space-y-3"
                    >
                      {conditions.map((condition) => (
                        <div key={condition.value} className="flex items-start space-x-3">
                          <RadioGroupItem value={condition.value} id={condition.value} className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor={condition.value} className="font-medium cursor-pointer">
                              {condition.label}
                            </Label>
                            <p className="text-sm text-gray-500">{condition.description}</p>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Tags */}
                  <div>
                    <Label className="text-sm font-medium">Tags</Label>
                    <p className="text-xs text-gray-500 mb-3">Add tags to help others find your item</p>

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

                  {/* Additional Options */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="negotiable"
                        checked={formData.isNegotiable}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, isNegotiable: checked as boolean }))
                        }
                      />
                      <Label htmlFor="negotiable" className="text-sm">
                        Open to negotiation/multiple items for this piece
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="partial-trade"
                        checked={formData.allowPartialTrade}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, allowPartialTrade: checked as boolean }))
                        }
                      />
                      <Label htmlFor="partial-trade" className="text-sm">
                        Allow partial trades (item + cash)
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Swap Preferences */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>What Are You Looking For?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Looking For */}
                  <div>
                    <Label className="text-sm font-medium">Categories I'm interested in</Label>
                    <p className="text-xs text-gray-500 mb-3">Select what you'd like to trade for</p>

                    {formData.lookingFor.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {formData.lookingFor.map((category) => (
                          <Badge key={category} variant="default" className="flex items-center gap-1">
                            {category}
                            <X className="h-3 w-3 cursor-pointer" onClick={() => removeLookingFor(category)} />
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {categories
                        .filter((category) => !formData.lookingFor.includes(category))
                        .map((category) => (
                          <Badge
                            key={category}
                            variant="outline"
                            className="cursor-pointer hover:bg-gray-100"
                            onClick={() => addLookingFor(category)}
                          >
                            {category}
                          </Badge>
                        ))}
                    </div>
                  </div>

                  {/* Meetup Preferences */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Preferred meetup location</Label>
                    <RadioGroup
                      value={formData.meetupPreference}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, meetupPreference: value }))}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="campus" id="campus" />
                        <Label htmlFor="campus">On campus (library, student center, etc.)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dorm" id="dorm" />
                        <Label htmlFor="dorm">Dorm lobby/common area</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="public" id="public" />
                        <Label htmlFor="public">Public place near campus</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Availability */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">When are you usually available?</Label>
                    <RadioGroup
                      value={formData.availability}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, availability: value }))}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="flexible" id="flexible" />
                        <Label htmlFor="flexible">Flexible - anytime works</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weekdays" id="weekdays" />
                        <Label htmlFor="weekdays">Weekdays only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weekends" id="weekends" />
                        <Label htmlFor="weekends">Weekends only</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="bg-transparent"
              >
                Previous
              </Button>

              {currentStep < 3 ? (
                <Button
                  onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
                  disabled={
                    (currentStep === 1 &&
                      (!formData.title || !formData.category || !formData.size || formData.images.length === 0)) ||
                    (currentStep === 2 && !formData.condition)
                  }
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Next
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                  Post Item
                </Button>
              )}
            </div>
          </div>

          {/* Preview Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg">Preview</CardTitle>
              </CardHeader>
              <CardContent>
                {formData.images.length > 0 ? (
                  <div className="space-y-4">
                    <img
                      src={formData.images[0] || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />

                    <div>
                      <h3 className="font-semibold text-lg">{formData.title || "Item Title"}</h3>
                      <p className="text-sm text-gray-600">
                        {formData.size && `Size ${formData.size}`}
                        {formData.size && formData.condition && " • "}
                        {formData.condition && formData.condition.replace("-", " ")}
                      </p>

                      {formData.brand && <p className="text-sm text-gray-600 mt-1">Brand: {formData.brand}</p>}

                      {formData.description && (
                        <p className="text-sm text-gray-700 mt-2 line-clamp-3">{formData.description}</p>
                      )}

                      {formData.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {formData.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                          {formData.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{formData.tags.length - 3} more
                            </Badge>
                          )}
                        </div>
                      )}

                      <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span>Your Campus</span>
                        <span>•</span>
                        <Clock className="h-3 w-3" />
                        <span>Just now</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Camera className="mx-auto h-12 w-12 mb-2" />
                    <p>Add photos to see preview</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
