"use client"

import { useState, useEffect } from "react"
import { MapView } from "@/components/map-view"
import { SwapFeed } from "@/components/swap-feed"
import { UploadModal } from "@/components/upload-modal"
import { ChatPanel } from "@/components/chat-panel"
import { Header } from "@/components/header"
import { StatsBar } from "@/components/stats-bar"
import { TrendingItems } from "@/components/trending-items"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Map, List, Sparkles, Filter, Zap, TrendingUp } from "lucide-react"

// Enhanced mock data with more vibrant properties
const mockSwapItems = [
  {
    id: "1",
    title: "Vintage Denim Jacket",
    size: "M",
    condition: "Good",
    images: ["/placeholder.svg?height=300&width=300&text=Vintage+Denim"],
    location: { lat: 40.7128, lng: -74.006, address: "NYU Campus" },
    user: { name: "Sarah M.", avatar: "/placeholder.svg?height=40&width=40", verified: true },
    hotnessScore: 95,
    tags: ["vintage", "denim", "casual", "trendy"],
    distance: 0.2,
    postedAt: "2 hours ago",
    likes: 24,
    views: 156,
    isNew: true,
    category: "Outerwear",
  },
  {
    id: "2",
    title: "Nike Air Max Sneakers",
    size: "9",
    condition: "Like New",
    images: ["/placeholder.svg?height=300&width=300&text=Nike+Sneakers"],
    location: { lat: 40.7589, lng: -73.9851, address: "Columbia Campus" },
    user: { name: "Mike R.", avatar: "/placeholder.svg?height=40&width=40", verified: true },
    hotnessScore: 88,
    tags: ["nike", "athletic", "shoes", "streetwear"],
    distance: 0.5,
    postedAt: "4 hours ago",
    likes: 31,
    views: 203,
    isNew: false,
    category: "Shoes",
  },
  {
    id: "3",
    title: "Cozy Knit Sweater",
    size: "S",
    condition: "Excellent",
    images: ["/placeholder.svg?height=300&width=300&text=Knit+Sweater"],
    location: { lat: 40.7282, lng: -73.9942, address: "NYU Campus" },
    user: { name: "Emma L.", avatar: "/placeholder.svg?height=40&width=40", verified: false },
    hotnessScore: 78,
    tags: ["cozy", "winter", "knit", "warm"],
    distance: 0.1,
    postedAt: "1 day ago",
    likes: 18,
    views: 89,
    isNew: false,
    category: "Tops",
  },
]

export default function HomePage() {
  const [viewMode, setViewMode] = useState<"map" | "feed">("map")
  const [isUploadOpen, setIsUploadOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [swapItems, setSwapItems] = useState(mockSwapItems)
  const [userLocation, setUserLocation] = useState({ lat: 40.7128, lng: -74.006 })
  const [showFilters, setShowFilters] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  useEffect(() => {
    // Simulate getting user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        () => {
          console.log("Using default location")
        },
      )
    }
  }, [])

  const handleItemUpload = (newItem: any) => {
    const item = {
      ...newItem,
      id: Date.now().toString(),
      location: { ...userLocation, address: "Your Campus" },
      user: { name: "You", avatar: "/placeholder.svg?height=40&width=40", verified: true },
      hotnessScore: Math.floor(Math.random() * 40) + 60,
      distance: 0,
      postedAt: "Just now",
      likes: 0,
      views: 1,
      isNew: true,
    }
    setSwapItems([item, ...swapItems])
    setIsUploadOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <Header />
      <StatsBar />

      <main className="container mx-auto px-4 py-6">
        {/* Hero Section with Animations */}
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4 animate-float">
            Swap. Style. Sustain. ✨
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover amazing clothing swaps with your campus community. Trade
            sustainably, style uniquely!
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={() => setIsUploadOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg hover-lift animate-pulse-glow"
            >
              <Plus className="h-5 w-5 mr-2" />
              Post Your First Item
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full hover-lift bg-transparent"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Explore Trending
            </Button>
          </div>
        </div>

        {/* Trending Items Carousel */}
        <TrendingItems
          items={swapItems.filter((item) => item.hotnessScore > 85)}
        />

        {/* View Toggle with Enhanced Design */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <Button
              variant={viewMode === "map" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("map")}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 transition-all duration-300 ${
                viewMode === "map"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "hover:bg-gray-100"
              }`}
            >
              <Map className="h-4 w-4" />
              Map View
              {viewMode === "map" && (
                <Sparkles className="h-3 w-3 animate-spin" />
              )}
            </Button>
            <Button
              variant={viewMode === "feed" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("feed")}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 transition-all duration-300 ${
                viewMode === "feed"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "hover:bg-gray-100"
              }`}
            >
              <List className="h-4 w-4" />
              Feed View
              {viewMode === "feed" && (
                <TrendingUp className="h-3 w-3 animate-bounce" />
              )}
            </Button>
            <Button>
              Marketplace
             </Button>

          </div>
        </div>
        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg border border-gray-200 animate-slide-up">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                "Vintage",
                "Designer",
                "Casual",
                "Formal",
                "Athletic",
                "Trendy",
              ].map((filter) => (
                <Button
                  key={filter}
                  variant={
                    activeFilters.includes(filter) ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => {
                    if (activeFilters.includes(filter)) {
                      setActiveFilters(
                        activeFilters.filter((f) => f !== filter)
                      );
                    } else {
                      setActiveFilters([...activeFilters, filter]);
                    }
                  }}
                  className={`rounded-full transition-all duration-300 hover-lift ${
                    activeFilters.includes(filter)
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "border-gray-300 hover:border-purple-400 hover:bg-purple-50"
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Main Content with Enhanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              {viewMode === "map" ? (
                <MapView
                  items={swapItems}
                  userLocation={userLocation}
                  onItemSelect={setSelectedItem}
                />
              ) : (
                <SwapFeed items={swapItems} onItemSelect={setSelectedItem} />
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <ChatPanel selectedItem={selectedItem} />
            </div>
          </div>
        </div>

        {/* Floating Action Elements */}
        <div className="fixed bottom-6 right-6 z-40">
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => setIsUploadOpen(true)}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover-lift animate-pulse-glow"
            >
              <Plus className="h-8 w-8" />
            </Button>
            <Button
              variant="outline"
              className="w-12 h-12 rounded-full bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50 shadow-lg hover-lift"
            >
              <Sparkles className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>

      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onUpload={handleItemUpload}
      />
    </div>
  );
}
