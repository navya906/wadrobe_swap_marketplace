"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Flame, Eye, Heart, Zap } from "lucide-react"

interface TrendingItemsProps {
  items: any[]
}

export function TrendingItems({ items }: TrendingItemsProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Flame className="h-6 w-6 text-orange-500 animate-bounce" />
          <h2 className="text-2xl font-bold gradient-text">Trending Now</h2>
        </div>
        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white animate-pulse">
          <Zap className="h-3 w-3 mr-1" />
          Hot
        </Badge>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {items.slice(0, 5).map((item, index) => (
          <Card
            key={item.id}
            className="min-w-[280px] hover-lift animate-bounce-in bg-gradient-to-br from-white to-gray-50 border-2 border-transparent hover:border-purple-300 shadow-lg"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-4">
              <div className="relative mb-3">
                <img
                  src={item.images[0] || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <div className="absolute top-2 right-2 flex gap-1">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white animate-pulse">
                    <Flame className="h-3 w-3 mr-1" />
                    {item.hotnessScore}
                  </Badge>
                  {item.isNew && (
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white animate-bounce">NEW</Badge>
                  )}
                </div>
                <div className="absolute bottom-2 left-2 right-2 glass-effect rounded-lg p-2">
                  <div className="flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-2">
                      <Eye className="h-3 w-3" />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-3 w-3" />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg truncate">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Size {item.size}</p>
                  <Badge variant="outline" className="text-xs">
                    {item.distance}mi away
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 2).map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
