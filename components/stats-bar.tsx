"use client"
import { Badge } from "@/components/ui/badge"
import { Users, Shirt, Repeat, TrendingUp, Heart } from "lucide-react"

export function StatsBar() {
  const stats = [
    { icon: Users, label: "Active Swappers", value: "2,847", change: "+12%", color: "text-blue-600" },
    { icon: Shirt, label: "Items Available", value: "8,392", change: "+8%", color: "text-purple-600" },
    { icon: Repeat, label: "Swaps Today", value: "156", change: "+24%", color: "text-green-600" },
    { icon: Heart, label: "Items Saved", value: "1,203", change: "+15%", color: "text-pink-600" },
  ]

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-2 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{stat.value}</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-600">{stat.label}</p>
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.change}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
