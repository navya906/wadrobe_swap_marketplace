"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, Flame, MapPin, Clock, Eye, Zap, Star, Bookmark } from "lucide-react"

interface SwapItem {
  id: string
  title: string
  size: string
  condition: string
  images: string[]
  location: { lat: number; lng: number; address: string }
  user: { name: string; avatar: string; verified?: boolean }
  hotnessScore: number
  tags: string[]
  distance: number
  postedAt: string
  likes: number
  views: number
  isNew: boolean
  category: string
}

interface SwapFeedProps {
  items: SwapItem[]
  onItemSelect: (itemId: string) => void
}

export function SwapFeed({ items, onItemSelect }: SwapFeedProps) {
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set())
  const [savedItems, setSavedItems] = useState<Set<string>>(new Set())

  const toggleLike = (itemId: string) => {
    const newLikedItems = new Set(likedItems)
    if (newLikedItems.has(itemId)) {
      newLikedItems.delete(itemId)
    } else {
      newLikedItems.add(itemId)
    }
    setLikedItems(newLikedItems)
  }

  const toggleSave = (itemId: string) => {
    const newSavedItems = new Set(savedItems)
    if (newSavedItems.has(itemId)) {
      newSavedItems.delete(itemId)
    } else {
      newSavedItems.add(itemId)
    }
    setSavedItems(newSavedItems)
  }

  return (
    <div className="space-y-8 p-6">
      {items.map((item, index) => (
        <Card
          key={item.id}
          className="overflow-hidden hover-lift animate-slide-up bg-gradient-to-br from-white to-gray-50 border-2 border-transparent hover:border-purple-200 shadow-lg"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="p-0">
            {/* Enhanced User Header */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar className="h-12 w-12 border-2 border-purple-200">
                      <AvatarImage src={item.user.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-br from-purple-100 to-pink-100">
                        {item.user.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    {item.user.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-lg">{item.user.name}</p>
                      {item.user.verified && <Badge className="bg-blue-500 text-white text-xs">Verified</Badge>}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{item.location.address}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{item.postedAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {item.isNew && (
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white animate-bounce">
                      <Zap className="h-3 w-3 mr-1" />
                      NEW
                    </Badge>
                  )}
                  <Badge
                    variant={item.hotnessScore > 85 ? "destructive" : item.hotnessScore > 70 ? "default" : "secondary"}
                    className={`flex items-center gap-1 ${
                      item.hotnessScore > 85
                        ? "bg-gradient-to-r from-red-500 to-orange-500 animate-pulse"
                        : item.hotnessScore > 70
                          ? "bg-gradient-to-r from-orange-500 to-yellow-500"
                          : ""
                    }`}
                  >
                    <Flame className="h-3 w-3" />
                    {item.hotnessScore}
                  </Badge>
                  <Badge variant="outline" className="text-sm border-purple-300 text-purple-600">
                    {item.distance}mi away
                  </Badge>
                </div>
              </div>
            </div>

            {/* Enhanced Item Image */}
            <div className="relative group">
              <img
                src={item.images[0] || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-96 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                onClick={() => onItemSelect(item.id)}
              />

              {/* Image Overlays */}
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-black/70 text-white backdrop-blur-sm">{item.category}</Badge>
                {item.images.length > 1 && (
                  <Badge className="bg-black/70 text-white backdrop-blur-sm">+{item.images.length - 1} more</Badge>
                )}
              </div>

              <div className="absolute bottom-4 right-4 glass-effect rounded-xl p-3">
                <div className="flex items-center gap-3 text-white text-sm">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{item.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button
                  onClick={() => onItemSelect(item.id)}
                  className="bg-white/90 text-gray-900 hover:bg-white rounded-xl px-6 py-3 font-semibold shadow-lg"
                >
                  View Details
                </Button>
              </div>
            </div>

            {/* Enhanced Item Details */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-2xl mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-lg">
                    Size {item.size} • {item.condition}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleSave(item.id)}
                  className={`rounded-xl p-3 ${savedItems.has(item.id) ? "text-purple-600 bg-purple-50" : "text-gray-400"}`}
                >
                  <Bookmark className={`h-5 w-5 ${savedItems.has(item.id) ? "fill-current" : ""}`} />
                </Button>
              </div>

              {/* Enhanced Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200 cursor-pointer transition-all duration-300"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleLike(item.id)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 transition-all duration-300 ${
                      likedItems.has(item.id)
                        ? "text-red-500 bg-red-50 hover:bg-red-100"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${likedItems.has(item.id) ? "fill-current animate-bounce" : ""}`} />
                    <span className="font-medium">{item.likes + (likedItems.has(item.id) ? 1 : 0)}</span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onItemSelect(item.id)}
                    className="flex items-center gap-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl px-4 py-2 transition-all duration-300"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-medium">Chat</span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-xl px-4 py-2 transition-all duration-300"
                  >
                    <Share2 className="h-5 w-5" />
                    <span className="font-medium">Share</span>
                  </Button>
                </div>

                <Button
                  onClick={() => onItemSelect(item.id)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl px-8 py-3 font-semibold shadow-lg hover-lift"
                >
                  I'm Interested! ✨
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
