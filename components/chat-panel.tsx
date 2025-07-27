"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Phone, Video, MoreVertical, MapPin, Clock } from "lucide-react"

interface ChatPanelProps {
  selectedItem: string | null
}

const mockChats = [
  {
    id: "1",
    user: { name: "Sarah M.", avatar: "/placeholder.svg?height=40&width=40" },
    lastMessage: "Hey! Is this jacket still available?",
    timestamp: "2m ago",
    unread: 2,
    item: { title: "Vintage Denim Jacket", image: "/placeholder.svg?height=60&width=60" },
  },
  {
    id: "2",
    user: { name: "Mike R.", avatar: "/placeholder.svg?height=40&width=40" },
    lastMessage: "Perfect! When can we meet?",
    timestamp: "1h ago",
    unread: 0,
    item: { title: "Nike Running Shoes", image: "/placeholder.svg?height=60&width=60" },
  },
]

const mockMessages = [
  { id: "1", sender: "Sarah M.", message: "Hey! Is this jacket still available?", timestamp: "2:30 PM", isOwn: false },
  { id: "2", sender: "You", message: "Yes it is! Are you interested?", timestamp: "2:32 PM", isOwn: true },
  {
    id: "3",
    sender: "Sarah M.",
    message: "Definitely! Could you tell me more about the condition?",
    timestamp: "2:33 PM",
    isOwn: false,
  },
  {
    id: "4",
    sender: "You",
    message: "It's in really good condition. Only worn a few times. No stains or tears.",
    timestamp: "2:35 PM",
    isOwn: true,
  },
  {
    id: "5",
    sender: "Sarah M.",
    message: "Sounds perfect! When would be a good time to meet up?",
    timestamp: "2:36 PM",
    isOwn: false,
  },
]

export function ChatPanel({ selectedItem }: ChatPanelProps) {
  const [activeChat, setActiveChat] = useState<string | null>(null)
  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState(mockMessages)

  useEffect(() => {
    if (selectedItem && !activeChat) {
      setActiveChat("1") // Auto-open first chat when item is selected
    }
  }, [selectedItem, activeChat])

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now().toString(),
        sender: "You",
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isOwn: true,
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

  if (!activeChat) {
    return (
      <Card className="h-[600px]">
        <CardHeader>
          <CardTitle className="text-lg">Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockChats.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => setActiveChat(chat.id)}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={chat.user.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{chat.user.name[0]}</AvatarFallback>
                  </Avatar>
                  {chat.unread > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {chat.unread}
                    </Badge>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">{chat.user.name}</p>
                    <span className="text-xs text-gray-500">{chat.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <img src={chat.item.image || "/placeholder.svg"} alt="" className="w-4 h-4 rounded object-cover" />
                    <span className="text-xs text-gray-500 truncate">{chat.item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  const currentChat = mockChats.find((chat) => chat.id === activeChat)

  return (
    <Card className="h-[600px] flex flex-col">
      {/* Chat Header */}
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={currentChat?.user.avatar || "/placeholder.svg"} />
              <AvatarFallback>{currentChat?.user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm">{currentChat?.user.name}</p>
              <p className="text-xs text-gray-500">Online now</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Item Context */}
        {currentChat && (
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg mt-2">
            <img
              src={currentChat.item.image || "/placeholder.svg"}
              alt={currentChat.item.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="font-medium text-sm">{currentChat.item.title}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin className="h-3 w-3" />
                <span>0.2 mi away</span>
                <span>•</span>
                <Clock className="h-3 w-3" />
                <span>Posted 2h ago</span>
              </div>
            </div>
          </div>
        )}
      </CardHeader>

      {/* Messages */}
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-4 py-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    message.isOwn ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                  <p className={`text-xs mt-1 ${message.isOwn ? "text-blue-100" : "text-gray-500"}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1"
            />
            <Button onClick={sendMessage} className="bg-blue-600 hover:bg-blue-700">
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 mt-2">
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              <MapPin className="h-3 w-3 mr-1" />
              Suggest meetup
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              📱 Share contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
