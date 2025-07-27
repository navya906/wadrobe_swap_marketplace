"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Bell, MessageCircle, User, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Animation */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse-glow">
              <span className="text-white font-bold text-lg">CS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">CampusSwap</h1>
              <p className="text-xs text-gray-500">Style • Swap • Sustain</p>
            </div>
          </div>

          {/* Enhanced Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search vintage jackets, Nike shoes, or @username..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 w-full rounded-2xl border-2 border-gray-200 focus:border-purple-400 focus:ring-purple-400 bg-gray-50 hover:bg-white transition-all duration-300"
              />
              <Button
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl px-4"
              >
                <Sparkles className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Enhanced User Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/upload">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white flex items-center gap-2 rounded-xl px-6 py-3 shadow-lg hover-lift animate-shimmer">
                <Zap className="h-4 w-4" />
                Upload
              </Button>
            </Link>

            <Button variant="ghost" size="sm" className="relative hover:bg-purple-50 rounded-xl p-3">
              <Bell className="h-5 w-5 text-gray-600" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-red-500 to-pink-500 text-white animate-bounce">
                3
              </Badge>
            </Button>

            <Button variant="ghost" size="sm" className="relative hover:bg-blue-50 rounded-xl p-3">
              <MessageCircle className="h-5 w-5 text-gray-600" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white animate-pulse">
                2
              </Badge>
            </Button>

            <div className="relative">
              <Avatar className="h-10 w-10 border-2 border-purple-300 hover:border-purple-500 transition-all duration-300 cursor-pointer hover-lift">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback className="bg-gradient-to-br from-purple-100 to-pink-100">
                  <User className="h-5 w-5 text-purple-600" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
