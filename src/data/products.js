export const products = [
  {
    id: 1,
    name: "Classic Feather Tee",
    price: 35.00,
    description: "A premium cotton t-shirt with our signature pixel feather logo. Minimal, breathable, and timeless. Features a relaxed fit and reinforced neck seams.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Apparel",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Slate", hex: "#708090" }
    ],
    isFeatured: true,
    isNewArrival: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Pixel Cap",
    price: 25.00,
    description: "6-panel cap with embroidered pixel art. Adjustable strap for a perfect fit. Made from 100% organic cotton twill.",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Accessories",
    sizes: ["One Size"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Gray", hex: "#808080" }
    ],
    isFeatured: false,
    isNewArrival: true,
    rating: 4.5
  },
  {
    id: 3,
    name: "Monochrome Hoodie",
    price: 65.00,
    description: "Heavyweight fleece hoodie in stark black. Features a subtle gray feather on the sleeve. Double-lined hood and spacious kangaroo pocket.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556821840-d1645548316e?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Charcoal", hex: "#333333" }
    ],
    isFeatured: true,
    isNewArrival: false,
    rating: 4.9
  },
  {
    id: 4,
    name: "Feather Tote Bag",
    price: 20.00,
    description: "Durable canvas tote for your everyday essentials. Eco-friendly and stylish. Features an internal pocket for your phone and keys.",
    images: [
      "https://images.unsplash.com/photo-1544816153-12ad5d7133a1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Accessories",
    sizes: ["Large"],
    colors: [
      { name: "Natural", hex: "#F5F5DC" },
      { name: "Black", hex: "#000000" }
    ],
    isFeatured: false,
    isNewArrival: false,
    rating: 4.7
  },
  {
    id: 5,
    name: "Minimalist Socks",
    price: 12.00,
    description: "High-quality cotton socks with a pixelated feather pattern. Cushioned sole for all-day comfort.",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Accessories",
    sizes: ["S/M", "L/XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" }
    ],
    isFeatured: false,
    isNewArrival: true,
    rating: 4.6
  },
  {
    id: 6,
    name: "Graphic Sweatshirt",
    price: 55.00,
    description: "Cozy sweatshirt with a large pixel art feather graphic on the back. Dropped shoulders for a modern silhouette.",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=800&auto=format&fit=crop"
    ],
    category: "Apparel",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Heather Gray", hex: "#A9A9A9" }
    ],
    isFeatured: true,
    isBestSeller: true,
    rating: 4.8
  }
];

export const collections = [
  {
    id: "essential",
    name: "Essential Collection",
    description: "The core pieces you need for every day.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "monochrome",
    name: "Monochrome Series",
    description: "Strictly black, white, and shades of gray.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pixel-art",
    name: "Pixel Art Edition",
    description: "Celebrating our heritage in digital aesthetics.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop"
  }
];
