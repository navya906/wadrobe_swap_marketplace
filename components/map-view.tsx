"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Flame, Eye } from "lucide-react"

interface SwapItem {
  id: string
  title: string
  size: string
  condition: string
  images: string[]
  location: { lat: number; lng: number; address: string }
  user: { name: string; avatar: string }
  hotnessScore: number
  tags: string[]
  distance: number
  postedAt: string
}

interface MapViewProps {
  items: SwapItem[]
  userLocation: { lat: number; lng: number }
  onItemSelect: (itemId: string) => void
}

export function MapView({ items, userLocation, onItemSelect }: MapViewProps) {
  const [selectedPin, setSelectedPin] = useState<string | null>(null)

  // Mock map implementation - in a real app, you'd use Google Maps, Mapbox, etc.
  return (
    <Card className="h-[600px] relative overflow-hidden">
      <CardContent className="p-0 h-full">
        {/* Map Background */}
        <div
          className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 relative"
          style={{
            backgroundImage: `url('/placeholder.svg?height=600&width=800')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* User Location Pin */}
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: "50%", top: "50%" }}
          >
            <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-600 whitespace-nowrap">
              You are here
            </div>
          </div>

          {/* Item Pins */}
          {items.map((item, index) => {
            const pinPosition = {
              left: `${45 + ((index * 15) % 40)}%`,
              top: `${35 + ((index * 10) % 30)}%`,
            }

            return (
              <div
                key={item.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                style={pinPosition}
                onClick={() => {
                  setSelectedPin(item.id)
                  onItemSelect(item.id)
                }}
              >
                {/* Pin */}
                <div
                  className={`relative ${selectedPin === item.id ? "scale-110" : "hover:scale-105"} transition-transform`}
                >
                  <MapPin
                    className={`h-8 w-8 ${
                      item.hotnessScore > 85
                        ? "text-red-500"
                        : item.hotnessScore > 70
                          ? "text-orange-500"
                          : "text-blue-500"
                    } drop-shadow-lg`}
                    fill="currentColor"
                  />
                  {item.hotnessScore > 85 && (
                    <Flame className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 h-3 w-3 text-red-400 animate-bounce" />
                  )}
                </div>

                {/* Item Preview Card */}
                {selectedPin === item.id && (
                  <Card className="absolute top-10 left-1/2 transform -translate-x-1/2 w-64 shadow-xl z-30 animate-in fade-in-0 zoom-in-95">
                    <CardContent className="p-3">
                      <div className="flex gap-3">
                        <img
                          src={item.images[0] || "/placeholder.svg"}
                          alt={item.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm truncate">{item.title}</h3>
                          <p className="text-xs text-gray-600">
                            Size {item.size} • {item.condition}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              <Flame className="h-3 w-3 mr-1" />
                              {item.hotnessScore}
                            </Badge>
                            <span className="text-xs text-gray-500">{item.distance}mi away</span>
                          </div>
                          <Button size="sm" className="w-full mt-2 h-7 text-xs">
                            <Eye className="h-3 w-3 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )
          })}

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
              +
            </Button>
            <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
              −
            </Button>
          </div>

          {/* Legend */}
          <Card className="absolute bottom-4 left-4 p-3">
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-red-500" fill="currentColor" />
                <span>Hot Items (85+)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-orange-500" fill="currentColor" />
                <span>Popular (70+)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-blue-500" fill="currentColor" />
                <span>Available</span>
              </div>
            </div>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
