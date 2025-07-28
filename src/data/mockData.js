// Mock data for the Wardrobe Swap Marketplace

// Available clothing items for swiping
export const clothingItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    brand: "Levi's",
    size: "M",
    condition: "Excellent",
    price: 45,
    owner: "Sarah",
    ownerId: "user_2",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=600&fit=crop",
    category: "Outerwear",
    description: "Classic vintage Levi's denim jacket in excellent condition. Perfect for layering!",
    datePosted: "2024-01-15",
    likes: 12,
    views: 45
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    brand: "H&M",
    size: "S",
    condition: "Good",
    price: 25,
    owner: "Emma",
    ownerId: "user_3",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
    category: "Dresses",
    description: "Beautiful floral pattern dress, perfect for summer occasions.",
    datePosted: "2024-01-14",
    likes: 8,
    views: 32
  },
  {
    id: 3,
    title: "Leather Biker Jacket",
    brand: "Zara",
    size: "L",
    condition: "Very Good",
    price: 80,
    owner: "Alex",
    ownerId: "user_4",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop",
    category: "Outerwear",
    description: "Edgy leather biker jacket that adds attitude to any outfit.",
    datePosted: "2024-01-13",
    likes: 15,
    views: 67
  },
  {
    id: 4,
    title: "Cozy Knit Sweater",
    brand: "Uniqlo",
    size: "M",
    condition: "Excellent",
    price: 30,
    owner: "Maya",
    ownerId: "user_5",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=600&fit=crop",
    category: "Tops",
    description: "Super soft and cozy knit sweater, perfect for cold days.",
    datePosted: "2024-01-12",
    likes: 10,
    views: 28
  },
  {
    id: 5,
    title: "High-Waisted Jeans",
    brand: "American Eagle",
    size: "28",
    condition: "Good",
    price: 35,
    owner: "Jessica",
    ownerId: "user_6",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=600&fit=crop",
    category: "Bottoms",
    description: "Trendy high-waisted jeans that go with everything.",
    datePosted: "2024-01-11",
    likes: 7,
    views: 23
  },
  {
    id: 6,
    title: "Silk Blouse",
    brand: "Banana Republic",
    size: "S",
    condition: "Excellent",
    price: 40,
    owner: "Rachel",
    ownerId: "user_7",
    image: "https://images.unsplash.com/photo-1564257577-7eacab8ba5d0?w=400&h=600&fit=crop",
    category: "Tops",
    description: "Elegant silk blouse perfect for professional or formal occasions.",
    datePosted: "2024-01-10",
    likes: 14,
    views: 39
  },
  {
    id: 7,
    title: "Wool Coat",
    brand: "J.Crew",
    size: "M",
    condition: "Very Good",
    price: 120,
    owner: "Sophie",
    ownerId: "user_8",
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=600&fit=crop",
    category: "Outerwear",
    description: "Classic wool coat that never goes out of style.",
    datePosted: "2024-01-09",
    likes: 18,
    views: 55
  },
  {
    id: 8,
    title: "Casual T-Shirt",
    brand: "Gap",
    size: "L",
    condition: "Good",
    price: 15,
    owner: "Mike",
    ownerId: "user_9",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop",
    category: "Tops",
    description: "Comfortable casual t-shirt for everyday wear.",
    datePosted: "2024-01-08",
    likes: 5,
    views: 18
  },
  {
    id: 9,
    title: "Evening Gown",
    brand: "ASOS",
    size: "M",
    condition: "Excellent",
    price: 85,
    owner: "Isabella",
    ownerId: "user_10",
    image: "https://images.unsplash.com/photo-1566479179817-1fb1e57d1b2a?w=400&h=600&fit=crop",
    category: "Dresses",
    description: "Stunning evening gown perfect for special occasions.",
    datePosted: "2024-01-07",
    likes: 22,
    views: 78
  },
  {
    id: 10,
    title: "Sports Hoodie",
    brand: "Nike",
    size: "L",
    condition: "Good",
    price: 40,
    owner: "Chris",
    ownerId: "user_11",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=600&fit=crop",
    category: "Activewear",
    description: "Comfortable sports hoodie for workouts or casual wear.",
    datePosted: "2024-01-06",
    likes: 9,
    views: 31
  },
  {
    id: 11,
    title: "Pleated Midi Skirt",
    brand: "Zara",
    size: "S",
    condition: "Excellent",
    price: 28,
    owner: "Luna",
    ownerId: "user_12",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d24?w=400&h=600&fit=crop",
    category: "Bottoms",
    description: "Chic pleated midi skirt that's perfect for office or dinner.",
    datePosted: "2024-01-05",
    likes: 11,
    views: 42
  },
  {
    id: 12,
    title: "Striped Cardigan",
    brand: "Madewell",
    size: "M",
    condition: "Very Good",
    price: 38,
    owner: "Olivia",
    ownerId: "user_13",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=600&fit=crop",
    category: "Tops",
    description: "Classic striped cardigan that's versatile for any season.",
    datePosted: "2024-01-04",
    likes: 13,
    views: 36
  }
];

// Current user's clothing items
export const userClothes = [
  {
    id: 101,
    title: "Classic White Shirt",
    brand: "Uniqlo",
    size: "M",
    condition: "Excellent",
    price: 20,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop",
    category: "Tops",
    description: "Timeless white button-down shirt for any occasion.",
    datePosted: "2024-01-20",
    likes: 6,
    views: 19,
    status: "active" // active, matched, sold
  },
  {
    id: 102,
    title: "Black Skinny Jeans",
    brand: "Zara",
    size: "S",
    condition: "Good",
    price: 30,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=600&fit=crop",
    category: "Bottoms",
    description: "Versatile black skinny jeans that go with everything.",
    datePosted: "2024-01-19",
    likes: 4,
    views: 15,
    status: "active"
  },
  {
    id: 103,
    title: "Beige Trench Coat",
    brand: "Burberry",
    size: "M",
    condition: "Excellent",
    price: 150,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop",
    category: "Outerwear",
    description: "Classic Burberry trench coat in pristine condition.",
    datePosted: "2024-01-18",
    likes: 25,
    views: 89,
    status: "matched"
  },
  {
    id: 104,
    title: "Floral Midi Dress",
    brand: "& Other Stories",
    size: "S",
    condition: "Very Good",
    price: 45,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
    category: "Dresses",
    description: "Beautiful floral midi dress perfect for spring.",
    datePosted: "2024-01-17",
    likes: 8,
    views: 24,
    status: "active"
  },
  {
    id: 105,
    title: "Cashmere Sweater",
    brand: "Everlane",
    size: "M",
    condition: "Excellent",
    price: 65,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop",
    category: "Tops",
    description: "Luxurious cashmere sweater in soft gray.",
    datePosted: "2024-01-16",
    likes: 12,
    views: 33,
    status: "active"
  }
];

// Sample matches data
export const matchesData = [
  {
    id: 1,
    user1: "current-user",
    user2: "user_3", // Emma
    user1Item: 102, // Black Skinny Jeans
    user2Item: 2,   // Floral Summer Dress
    matchDate: "2024-01-20T10:30:00Z",
    status: "matched", // matched, chatting, completed
    lastMessage: {
      sender: "user_3",
      text: "Hi! I love your jeans! Are you interested in swapping?",
      timestamp: "2024-01-20T11:15:00Z"
    }
  },
  {
    id: 2,
    user1: "current-user",
    user2: "user_8", // Sophie
    user1Item: 103, // Beige Trench Coat
    user2Item: 7,   // Wool Coat
    matchDate: "2024-01-19T14:20:00Z",
    status: "chatting",
    lastMessage: {
      sender: "current-user",
      text: "That sounds perfect! When would you like to meet?",
      timestamp: "2024-01-20T09:45:00Z"
    }
  },
  {
    id: 3,
    user1: "current-user",
    user2: "user_5", // Maya
    user1Item: 105, // Cashmere Sweater
    user2Item: 4,   // Cozy Knit Sweater
    matchDate: "2024-01-18T16:45:00Z",
    status: "completed",
    lastMessage: {
      sender: "user_5",
      text: "Thanks for the swap! I love the sweater ❤️",
      timestamp: "2024-01-19T20:30:00Z"
    }
  }
];

// User profile data
export const currentUser = {
  id: "current-user",
  name: "You",
  avatar: "👤",
  email: "user@wardrobeswap.com",
  location: "New York, NY",
  joinDate: "2024-01-01",
  bio: "Fashion lover looking to swap clothes sustainably! 🌱👗",
  stats: {
    totalSwaps: 12,
    successfulMatches: 8,
    itemsListed: 15,
    rating: 4.8
  },
  preferences: {
    sizes: ["S", "M"],
    categories: ["Tops", "Dresses", "Outerwear"],
    brands: ["Zara", "H&M", "Uniqlo", "Madewell"],
    maxPrice: 100,
    minCondition: "Good"
  }
};

// Sample notifications
export const notificationsData = [
  {
    id: 1,
    type: "match",
    title: "New Match!",
    message: "You and Emma both liked each other's items!",
    timestamp: "2024-01-20T10:30:00Z",
    read: false,
    userId: "user_3"
  },
  {
    id: 2,
    type: "like",
    title: "Someone liked your item!",
    message: "Your Cashmere Sweater received a like from Maya",
    timestamp: "2024-01-20T08:15:00Z",
    read: false,
    userId: "user_5"
  },
  {
    id: 3,
    type: "message",
    title: "New Message",
    message: "Sophie sent you a message about the coat swap",
    timestamp: "2024-01-20T07:45:00Z",
    read: true,
    userId: "user_8"
  },
  {
    id: 4,
    type: "swap_completed",
    title: "Swap Completed!",
    message: "Your swap with Maya has been completed successfully",
    timestamp: "2024-01-19T20:30:00Z",
    read: true,
    userId: "user_5"
  }
];

// Utility functions
export const getItemById = (id, isUserItem = false) => {
  const items = isUserItem ? userClothes : clothingItems;
  return items.find(item => item.id === id);
};

export const getUserMatches = (userId = "current-user") => {
  return matchesData.filter(match => 
    match.user1 === userId || match.user2 === userId
  );
};

export const getUnreadNotifications = () => {
  return notificationsData.filter(notification => !notification.read);
};

export const getItemsByCategory = (category, isUserItem = false) => {
  const items = isUserItem ? userClothes : clothingItems;
  return items.filter(item => item.category === category);
};

export const getItemsByCondition = (condition, isUserItem = false) => {
  const items = isUserItem ? userClothes : clothingItems;
  return items.filter(item => item.condition === condition);
};

// Categories for filtering
export const categories = [
  "All",
  "Tops",
  "Bottoms", 
  "Dresses",
  "Outerwear",
  "Activewear"
];

// Clothing conditions
export const conditions = [
  "New",
  "Excellent", 
  "Very Good",
  "Good",
  "Fair"
];

// Popular brands
export const brands = [
  "Zara",
  "H&M",
  "Uniqlo",
  "Nike",
  "Levi's",
  "Gap",
  "Madewell",
  "Everlane",
  "ASOS",
  "J.Crew",
  "Banana Republic",
  "& Other Stories",
  "Burberry"
];