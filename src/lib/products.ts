// Product Data Structure
export interface FAQ {
  question: string;
  answer: string;
}

export interface WomenOutfitOption {
  label: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  collection: string;
  category: "Tops" | "Skirt" | "Outfits" | "Couple Combo" | "Trouser";
  price: number;
  discount?: number;
  description: string;
  images: string[];
  type: "wrapstyle" | "indowestern" | "sareerevamp" | "couplecombo" | "tops" | "outfits";
  freeSize?: boolean;
  inStock?: boolean;
  includes: string[];
  fabricCare: string[];
  faqs: FAQ[];
  womenOutfitOptions?: WomenOutfitOption[];
}

// Mock Product Data
// Mapping products from:
// - Wrapstyles (e.g., Celestial Pearl, Divya's Versatile Brown Wrap Dress)
// - Made From Old Saree (e.g., Aabha, Noor-e-Ruhani)
// - New Collection (e.g., The Valentina Top)

export const products: Product[] = [
  // --- Wrapstyles ---
  {
    id: "celestial-pearl",
    name: "Celestial Pearl",
    collection: "wrapstyles",
    category: "Outfits",
    price: 3599,
    description: "A divine wrap style ensemble featuring pearlescent tones and fluid draping.",
    images: [
      "/assets/Products/Wrapstyles/Celestial Pearl/Cp1.png",
      "/assets/Products/Wrapstyles/Celestial Pearl/Cp2.png",
      "/assets/Products/Wrapstyles/Celestial Pearl/Cp3.jpg",
      "/assets/Products/Wrapstyles/Celestial Pearl/Cp4.jpg"
    ],
    type: "wrapstyle",
    freeSize: true,
    inStock: true,
    includes: [
      "Wrap Style Dress",
      "Premium packaging box",
      "Care instruction booklet"
    ],
    fabricCare: [
      "Dry clean only",
      "Do not bleach",
      "Iron at low temperature",
      "Store in cool dry place"
    ],
    faqs: [
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      },
      {
        question: "Does it fit all sizes?",
        answer: "Yes, this is a free-size wrap style designed to fit various body types comfortably."
      },
      {
        question: "Can I request minor alterations?",
        answer: "Yes, minor alterations are possible upon request."
      }
    ]
  },
  {
    id: "divyas-versatile-brown-wrap-dress",
    name: "Divya's Versatile Brown Wrap Dress",
    collection: "wrapstyles",
    category: "Outfits",
    price: 3599,
    description: "Elegant free-size wrap dress crafted for modern luxury.",
    images: [
      "/assets/Products/Wrapstyles/Divya_s versatile Brown Wrap Dress/Dv1.jpg",
      "/assets/Products/Wrapstyles/Divya_s versatile Brown Wrap Dress/Dv2.jpg",
      "/assets/Products/Wrapstyles/Divya_s versatile Brown Wrap Dress/Dv3.png",
      "/assets/Products/Wrapstyles/Divya_s versatile Brown Wrap Dress/Dv4.jpg"
    ],
    type: "wrapstyle",
    freeSize: true,
    inStock: true,
    includes: [
      "Versatile Brown Wrap Dress",
      "Premium packaging box",
      "Care instruction booklet"
    ],
    fabricCare: [
      "Dry clean only",
      "Do not bleach",
      "Iron at low temperature",
      "Store in cool dry place"
    ],
    faqs: [
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      },
      {
        question: "How do I wear this wrap dress?",
        answer: "It comes with an instruction card on different draping styles."
      }
    ]
  },
  {
    id: "the-odyssey-drape-skirt",
    name: "The Odyssey Drape Skirt",
    collection: "wrapstyles",
    category: "Skirt",
    price: 1599,
    description: "Elegant free-size wrap dress crafted for modern luxury.",
    images: [
      "/assets/Products/Wrapstyles/The Odyssey Drape Skirt/OD6.jpg",
      "/assets/Products/Wrapstyles/The Odyssey Drape Skirt/OD4.jpg"
    ],
    type: "wrapstyle",
    freeSize: true,
    inStock: true,
    includes: [
      "Odyssey Drape Skirt",
      "Premium packaging box",
      "Care instruction booklet"
    ],
    fabricCare: [
      "Dry clean only",
      "Do not bleach",
      "Iron at low temperature",
      "Store in cool dry place"
    ],
    faqs: [
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      },
      {
        question: "Can I request minor alterations?",
        answer: "Yes, minor alterations are possible upon request."
      }
    ]
  },
  
  {
    id: "the-nocturne-convertible-top",
    name: "The Nocturne Convertible Top",
    collection: "wrapstyles",
    category: "Tops",
    price: 1499,
    description: "Elegant free-size wrap dress crafted for modern luxury.",
    images: [
      "/assets/Products/Wrapstyles/The Nocturne Convertible Top/Nc1.png",
      "/assets/Products/Wrapstyles/The Nocturne Convertible Top/Nc2.png",
      "/assets/Products/Wrapstyles/The Nocturne Convertible Top/Nc3.png",
      "/assets/Products/Wrapstyles/The Nocturne Convertible Top/Nc4.jpg"
    ],
    type: "wrapstyle",
    freeSize: true,
    inStock: true,
    includes: [
      "Nocturne Convertible Top",
      "Premium packaging box",
      "Care instruction booklet"
    ],
    fabricCare: [
      "Dry clean only",
      "Do not bleach",
      "Iron at low temperature",
      "Store in cool dry place"
    ],
    faqs: [
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      },
      {
        question: "How do I wear this wrap dress?",
        answer: "It comes with an instruction card on different draping styles."
      }
    ]
  },
  {
    id: "the-aria-cowl-top",
    name: "The Aria Cowl Top",
    collection: "wrapstyles",
    category: "Tops",
    price: 1499,
    discount: 40,
    description: "Elegant free-size wrap dress crafted for modern luxury.",
    images: [
      "/assets/Products/Wrapstyles/The Aria Cowl Top/Ac1.png",
      "/assets/Products/Wrapstyles/The Aria Cowl Top/Ac2.jpg",
      "/assets/Products/Wrapstyles/The Aria Cowl Top/Ac3.jpg",
      "/assets/Products/Wrapstyles/The Aria Cowl Top/Ac4.png",
      "/assets/Products/Wrapstyles/The Aria Cowl Top/Ac5.png",
      "/assets/Products/Wrapstyles/The Aria Cowl Top/Ac6.png"
    ],
    type: "wrapstyle",
    freeSize: true,
    inStock: true,
    includes: [
      "Aria Cowl Top",
      "Premium packaging box",
      "Care instruction booklet"
    ],
    fabricCare: [
      "Dry clean only",
      "Do not bleach",
      "Iron at low temperature",
      "Store in cool dry place"
    ],
    faqs: [
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      },
      {
        question: "How do I wear this wrap dress?",
        answer: "It comes with an instruction card on different draping styles."
      }
    ]
  },
  {
    id: "the-riviera-drape-trouser",
    name: "The Riviera Drape Trouser",
    collection: "wrapstyles",
    category: "Trouser",
    price: 1599,
    description: "Elegant free-size wrap dress crafted for modern luxury.",
    images: [
      "/assets/Products/Wrapstyles/The Riviera Drape Trouser/RD1.jpg",
      "/assets/Products/Wrapstyles/The Riviera Drape Trouser/RD2.jpg"
    ],
    type: "wrapstyle",
    freeSize: true,
    inStock: true,
    includes: [
      "Riviera Drape Trouser",
      "Premium packaging box",
      "Care instruction booklet"
    ],
    fabricCare: [
      "Dry clean only",
      "Do not bleach",
      "Iron at low temperature",
      "Store in cool dry place"
    ],
    faqs: [
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      },
      {
        question: "How do I wear this wrap dress?",
        answer: "It comes with an instruction card on different draping styles."
      }
    ]
  },

  // --- Made From Old Saree ---
  {
    id: "aabha",
    name: "Aabha",
    collection: "saree-revival",
    category: "Outfits",
    price: 5999,
    description: "Revived from a vintage saree, Aabha brings traditional charm to contemporary fashion.",
    images: [
      "/assets/Products/saree-revival/Aabha/A1.png",
      "/assets/Products/saree-revival/Aabha/A2.png"
    ],
    type: "sareerevamp",
    freeSize: false,
    inStock: true,
    includes: [
      "Aabha Ensemble",
      "Authenticity certificate card",
      "Dust bag"
    ],
    fabricCare: [
      "Dry clean only",
      "Avoid direct sunlight",
      "Store in muslin cloth"
    ],
    faqs: [
      {
        question: "Is this made from a real old saree?",
        answer: "Yes, this piece is upcycled from a vintage saree."
      },
      {
        question: "Can I provide my own saree?",
        answer: "Yes, we accept custom orders to revamp your old sarees. Please contact us."
      }
    ]
  },
  {
    id: "noor-e-ruhani",
    name: "Noor-e-Ruhani",
    collection: "saree-revival",
    category: "Outfits",
    price: 8999,
    description: "A spiritual glow captured in fabric, redesigned from heirloom textiles.",
    images: [
      "/assets/Products/saree-revival/Noor-e-Ruhani/Noor1_.png",
      "/assets/Products/saree-revival/Noor-e-Ruhani/Noor2.png"
    ],
    type: "sareerevamp",
    freeSize: false,
    inStock: true,
    includes: [
      "Noor-e-Ruhani Outfit",
      "Authenticity certificate card",
      "Dust bag"
    ],
    fabricCare: [
      "Dry clean only",
      "Handle with care",
      "Store in muslin cloth"
    ],
    faqs: [
      {
        question: "Is this made from a real old saree?",
        answer: "Yes, this piece is upcycled from a vintage saree."
      },
      {
        question: "Can I request minor alterations?",
        answer: "Yes, minor alterations are possible upon request."
      }
    ]
  },
  {
    id: "phool-saaz",
    name: "Phool Saaz",
    collection: "saree-revival",
    category: "Outfits",
    price: 8999,
    description: "A spiritual glow captured in fabric, redesigned from heirloom textiles.",
    images: [
      "/assets/Products/saree-revival/PhoolSaaz/Ps1.png",
      "/assets/Products/saree-revival/PhoolSaaz/Ps2.png",
      "/assets/Products/saree-revival/PhoolSaaz/Ps3.png",
      "/assets/Products/saree-revival/PhoolSaaz/Ps4.png"
    ],
    type: "sareerevamp",
    freeSize: false,
    inStock: true,
    includes: [
      "Phool Saaz Outfit",
      "Authenticity certificate card",
      "Dust bag"
    ],
    fabricCare: [
      "Dry clean only",
      "Handle with care",
      "Store in muslin cloth"
    ],
    faqs: [
      {
        question: "Is this made from a real old saree?",
        answer: "Yes, this piece is upcycled from a vintage saree."
      },
      {
        question: "Can I request minor alterations?",
        answer: "Yes, minor alterations are possible upon request."
      }
    ]
  },
  {
    id: "revive-grace",
    name: "Revive Grace",
    collection: "saree-revival",
    category: "Outfits",
    price: 8999,
    description: "A spiritual glow captured in fabric, redesigned from heirloom textiles.",
    images: [
      "/assets/Products/saree-revival/Revive Grace/Rg1.png",
      "/assets/Products/saree-revival/Revive Grace/Rg2.png",
      "/assets/Products/saree-revival/Revive Grace/Rg3.png",
      "/assets/Products/saree-revival/Revive Grace/Rg4.png"
    ],
    type: "sareerevamp",
    freeSize: false,
    inStock: true,
    includes: [
      "Revive Grace Outfit",
      "Authenticity certificate card",
      "Dust bag"
    ],
    fabricCare: [
      "Dry clean only",
      "Handle with care",
      "Store in muslin cloth"
    ],
    faqs: [
      {
        question: "Is this made from a real old saree?",
        answer: "Yes, this piece is upcycled from a vintage saree."
      },
      {
        question: "Can I request minor alterations?",
        answer: "Yes, minor alterations are possible upon request."
      }
    ]
  },
  {
    id: "viraasat-varnika",
    name: "Viraasat Varnika",
    collection: "saree-revival",
    category: "Outfits",
    price: 8999,
    description: "A spiritual glow captured in fabric, redesigned from heirloom textiles.",
    images: [
      "/assets/Products/saree-revival/Viraasat Varnika/Vv1.png",
      "/assets/Products/saree-revival/Viraasat Varnika/Vv2.png",
      "/assets/Products/saree-revival/Viraasat Varnika/Vv3.png",
      "/assets/Products/saree-revival/Viraasat Varnika/Vv4.png"
    ],
    type: "sareerevamp",
    freeSize: false,
    inStock: true,
    includes: [
      "Viraasat Varnika Outfit",
      "Authenticity certificate card",
      "Dust bag"
    ],
    fabricCare: [
      "Dry clean only",
      "Handle with care",
      "Store in muslin cloth"
    ],
    faqs: [
      {
        question: "Is this made from a real old saree?",
        answer: "Yes, this piece is upcycled from a vintage saree."
      },
      {
        question: "Can I request minor alterations?",
        answer: "Yes, minor alterations are possible upon request."
      }
    ]
  },

  // --- New Collection ---
  {
    id: "the-valentina-top",
    name: "The Valentina Top",
    collection: "wrapstyles",
    category: "Tops",
    price: 1500,
    discount: 40,
    description: "Chic and sophisticated top from our latest collection.",
    images: [
      "/assets/Products/Wrapstyles/The Valentina Top/Vt1.jpg",
      "/assets/Products/Wrapstyles/The Valentina Top/Vt2.jpg"
    ],
    type: "wrapstyle",
    freeSize: false,
    inStock: true,
    includes: [
      "Valentina Top",
      "Premium packaging box",
      "Care instruction booklet"
    ],
    fabricCare: [
      "Dry clean only",
      "Do not bleach",
      "Iron at low temperature"
    ],
    faqs: [
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      },
      {
        question: "Can I wear this with a saree?",
        answer: "Yes, it is designed to be versatile and can be paired with skirts, sarees, or trousers."
      }
    ]
  },
  {
    id: "the-empress-drape",
    name: "The Empress Drape",
    collection: "indo-western",
    category: "Outfits",
    price: 3599,
    description: "Regal draping fit for royalty, part of our exclusive new line.",
    images: [
      "/assets/Products/indo-western/The Empress Drape/Ed1.jpg",
      "/assets/Products/indo-western/The Empress Drape/Ed2.jpg"
    ],
    type: "indowestern",
    freeSize: true,
    inStock: false,
    includes: [
      "Empress Drape Gown",
      "Premium packaging box",
      "Dust bag"
    ],
    fabricCare: [
      "Dry clean only",
      "Steam iron only",
      "Store in cool dry place"
    ],
    faqs: [
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      },
      {
        question: "How long does delivery take?",
        answer: "Standard delivery takes 5-10 business days."
      }
    ]
  },

  // --- Couple Combo ---
  {
    id: "kaleidoscopeset",
    name: "Kaleidoscope Set",
    collection: "couplecombo",
    category: "Couple Combo",
    price: 1599,
    description: "A beautifully coordinated set for couples, featuring vibrant kaleidoscope patterns. Perfect for festive occasions and celebrations.",
    images: [
      "/assets/Products/couplecombo/kaleidoscopeset/K_1.jpg",
      "/assets/Products/couplecombo/kaleidoscopeset/K_2.jpg",
      "/assets/Products/couplecombo/kaleidoscopeset/K_3.jpg"
    ],
    type: "couplecombo",
    freeSize: false,
    inStock: true,
    includes: [
      "Men's Outfit",
      "Women's Outfit",
      "Premium packaging box"
    ],
    fabricCare: [
      "Dry clean only",
      "Iron at low temperature",
      "Do not bleach"
    ],
    faqs: [
      {
        question: "Can we order different sizes for men and women?",
        answer: "Yes, you can specify individual sizes during checkout."
      },
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      }
    ],
    womenOutfitOptions: [
      { label: "Top Only", price: 1599 },
    ]
  },
  {
    id: "moonlightandmarineset",
    name: "Moonlight And Marine Set",
    collection: "couplecombo",
    category: "Couple Combo",
    price: 1599,
    description: "Elegant matching outfits in soothing moonlight and marine hues. Designed for the modern couple.",
    images: [
      "/assets/Products/couplecombo/moonlightandmarineset/M_1.jpg",
      "/assets/Products/couplecombo/moonlightandmarineset/M_2.jpg",
      "/assets/Products/couplecombo/moonlightandmarineset/M_3.png",
      "/assets/Products/couplecombo/moonlightandmarineset/M_4.png",
      "/assets/Products/couplecombo/moonlightandmarineset/M_5.png",
      "/assets/Products/couplecombo/moonlightandmarineset/M_6.jpg",
      "/assets/Products/couplecombo/moonlightandmarineset/M_7.png"
    ],
    type: "couplecombo",
    freeSize: false,
    inStock: true,
    includes: [
      "Men's Outfit",
      "Women's Outfit",
      "Premium packaging box"
    ],
    fabricCare: [
      "Dry clean only",
      "Iron at low temperature",
      "Do not bleach"
    ],
    faqs: [
      {
        question: "Can we order different sizes for men and women?",
        answer: "Yes, you can specify individual sizes during checkout."
      },
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      }
    ],
    womenOutfitOptions: [
      { label: "Top Only", price: 1599 },
      { label: "Skirt Only", price: 1599 },
      { label: "Whole Outfit", price: 2599 }
    ]
  },
  {
    id: "pastelpicnicset",
    name: "Pastel Picnic Set",
    collection: "couplecombo",
    category: "Couple Combo",
    price: 1599,
    description: "Soft pastel tones perfectly blended for a charming matching look. Ideal for daytime events.",
    images: [
      "/assets/Products/couplecombo/pastelpicnicset/Pp_1.jpg",
      "/assets/Products/couplecombo/pastelpicnicset/Pp_2.jpg",
      "/assets/Products/couplecombo/pastelpicnicset/Pp_3.jpg",
      "/assets/Products/couplecombo/pastelpicnicset/Pp_4.jpg",
      "/assets/Products/couplecombo/pastelpicnicset/Pp_6.jpg"
    ],
    type: "couplecombo",
    freeSize: false,
    inStock: true,
    includes: [
      "Men's Outfit",
      "Women's Outfit",
      "Premium packaging box"
    ],
    fabricCare: [
      "Dry clean only",
      "Iron at low temperature",
      "Do not bleach"
    ],
    faqs: [
      {
        question: "Can we order different sizes for men and women?",
        answer: "Yes, you can specify individual sizes during checkout."
      },
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      }
    ],
    womenOutfitOptions: [
      { label: "Top Only", price: 1599 },
      { label: "Skirt Only", price: 1599 },
      { label: "Whole Outfit", price: 2599 }
    ]
  },
  {
    id: "strokesofsummer",
    name: "Strokes Of Summer",
    collection: "couplecombo",
    category: "Couple Combo",
    price: 1599,
    description: "Vibrant and refreshing matching outfits that capture the essence of summer.",
    images: [
      "/assets/Products/couplecombo/strokesofsummer/Sos_1.jpg",
      "/assets/Products/couplecombo/strokesofsummer/Sos2.jpg",
      "/assets/Products/couplecombo/strokesofsummer/Sos_3.jpg",
      "/assets/Products/couplecombo/strokesofsummer/Sos_4.jpg",
      "/assets/Products/couplecombo/strokesofsummer/Sos_5.jpg"
    ],
    type: "couplecombo",
    freeSize: false,
    inStock: true,
    includes: [
      "Men's Outfit",
      "Women's Outfit",
      "Premium packaging box"
    ],
    fabricCare: [
      "Dry clean only",
      "Iron at low temperature",
      "Do not bleach"
    ],
    faqs: [
      {
        question: "Can we order different sizes for men and women?",
        answer: "Yes, you can specify individual sizes during checkout."
      },
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      }
    ],
    womenOutfitOptions: [
      { label: "Top Only", price: 1599 },
      { label: "Skirt Only", price: 1599 },
      { label: "Whole Outfit", price: 2599 }
    ]
  },
  {
    id: "summermuseset",
    name: "Summer Muse Set",
    collection: "couplecombo",
    category: "Couple Combo",
    price: 1599,
    description: "A breezy and coordinated look designed for comfort and style in the summer heat.",
    images: [
      "/assets/Products/couplecombo/summermuseset/Sm_1.jpg",
      "/assets/Products/couplecombo/summermuseset/Sm_3(1).jpg",
      "/assets/Products/couplecombo/summermuseset/Sm_3.jpg",
      "/assets/Products/couplecombo/summermuseset/Sm_4.jpg"
    ],
    type: "couplecombo",
    freeSize: false,
    inStock: true,
    includes: [
      "Men's Outfit",
      "Women's Outfit",
      "Premium packaging box"
    ],
    fabricCare: [
      "Dry clean only",
      "Iron at low temperature",
      "Do not bleach"
    ],
    faqs: [
      {
        question: "Can we order different sizes for men and women?",
        answer: "Yes, you can specify individual sizes during checkout."
      },
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      }
    ],
    womenOutfitOptions: [
      { label: "Top Only", price: 1599 },
      { label: "Skirt Only", price: 1599 },
      { label: "Whole Outfit", price: 2599 }
    ]
  },
  {
    id: "thejaipurtwinset",
    name: "The Jaipur Twin Set",
    collection: "couplecombo",
    category: "Couple Combo",
    price: 1599,
    description: "Inspired by the royal heritage of Jaipur, this set offers a regal matching look.",
    images: [
      "/assets/Products/couplecombo/thejaipurtwinset/J_1.jpg",
      "/assets/Products/couplecombo/thejaipurtwinset/J_2.jpg",
      "/assets/Products/couplecombo/thejaipurtwinset/J_3.jpg",
      "/assets/Products/couplecombo/thejaipurtwinset/J_4.jpg",
      "/assets/Products/couplecombo/thejaipurtwinset/J_5.jpg",
      "/assets/Products/couplecombo/thejaipurtwinset/J_6.jpg"
    ],
    type: "couplecombo",
    freeSize: false,
    inStock: true,
    includes: [
      "Men's Outfit",
      "Women's Outfit",
      "Premium packaging box"
    ],
    fabricCare: [
      "Dry clean only",
      "Iron at low temperature",
      "Do not bleach"
    ],
    womenOutfitOptions: [
      { label: "Top Only", price: 1599 }
    ],
    faqs: [
      {
        question: "Can we order different sizes for men and women?",
        answer: "Yes, you can specify individual sizes during checkout."
      },
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      }
    ]
  },
  {
    id: "thesolsticemosaicset",
    name: "The Solstice Mosaic Set",
    collection: "couplecombo",
    category: "Couple Combo",
    price: 1599,
    description: "A rich mosaic of colors and patterns, perfect for couples wanting to make a statement.",
    images: [
      "/assets/Products/couplecombo/thesolsticemosaicset/Sm7.jpg",
      "/assets/Products/couplecombo/thesolsticemosaicset/Sm2.jpg",
      "/assets/Products/couplecombo/thesolsticemosaicset/Sm3.jpg",
      "/assets/Products/couplecombo/thesolsticemosaicset/Sm4.jpg",
      "/assets/Products/couplecombo/thesolsticemosaicset/Sm5.jpg",
      "/assets/Products/couplecombo/thesolsticemosaicset/Sm6.jpg",
      "/assets/Products/couplecombo/thesolsticemosaicset/Sm1.jpg",
      "/assets/Products/couplecombo/thesolsticemosaicset/Sm8.jpg"
    ],
    type: "couplecombo",
    freeSize: false,
    inStock: true,
    includes: [
      "Men's Outfit",
      "Women's Outfit",
      "Premium packaging box"
    ],
    fabricCare: [
      "Dry clean only",
      "Iron at low temperature",
      "Do not bleach"
    ],
    faqs: [
      {
        question: "Can we order different sizes for men and women?",
        answer: "Yes, you can specify individual sizes during checkout."
      },
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      }
    ],
    womenOutfitOptions: [
      { label: "Top Only", price: 1599 },
      { label: "Skirt Only", price: 1599 },
      { label: "Whole Outfit", price: 2599 }
    ]
  },
  {
    id: "thesunflowersymphony",
    name: "The Sunflower Symphony",
    collection: "couplecombo",
    category: "Couple Combo",
    price: 1599,
    description: "Bright, cheerful, and beautifully coordinated. A true symphony of style.",
    images: [
      "/assets/Products/couplecombo/thesunflowersymphony/Sun1.jpg",
      "/assets/Products/couplecombo/thesunflowersymphony/Sun2.jpg",
      "/assets/Products/couplecombo/thesunflowersymphony/Sun3.jpg",
      "/assets/Products/couplecombo/thesunflowersymphony/Sun4.jpg",
      "/assets/Products/couplecombo/thesunflowersymphony/Sun5.jpg"
    ],
    type: "couplecombo",
    freeSize: false,
    inStock: true,
    includes: [
      "Men's Outfit",
      "Women's Outfit",
      "Premium packaging box"
    ],
    fabricCare: [
      "Dry clean only",
      "Iron at low temperature",
      "Do not bleach"
    ],
    faqs: [
      {
        question: "Can we order different sizes for men and women?",
        answer: "Yes, you can specify individual sizes during checkout."
      },
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order."
      }
    ],
    womenOutfitOptions: [
      { label: "Top Only", price: 1599 },
      { label: "Skirt Only", price: 1599 },
      { label: "Whole Outfit", price: 2599 }
    ]
  },

  // --- Tops ---
  {
    id: "asymmetricalluretop",
    name: "Asymmetric Allure Top",
    collection: "tops",
    category: "Tops",
    price: 999,
    description: "A stunning asymmetric top that redefines modern elegance with a chic silhouette. Perfect for evening outings or semi-formal gatherings.",
    images: [
      "/assets/Products/tops/asymmetricalluretop/Aa1.jpg",
      "/assets/Products/tops/asymmetricalluretop/Aa2.jpg",
      "/assets/Products/tops/asymmetricalluretop/Aa3.jpg"
    ],
    type: "tops",
    freeSize: false,
    inStock: true,
    includes: [
      "Asymmetric Allure Top",
      "Premium packaging box"
    ],
    fabricCare: [
      "Dry clean only",
      "Iron at low temperature",
      "Do not bleach"
    ],
    faqs: [
      {
        question: "Is this top available in different colors?",
        answer: "Currently, it is available in the showcased color only."
      },
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order to ensure the perfect fit."
      }
    ]
  },

  // --- Outfits ---
  {
    id: "thecrimsonmuseset",
    name: "The Crimson Muse Set",
    collection: "outfits",
    category: "Outfits",
    price: 2499,
    description: "A bold crimson set that exudes confidence and grace. Perfect for festive occasions and evening affairs.",
    images: [
      "/assets/Products/outfits/thecrimsonmuseset/Cm1.jpg",
      "/assets/Products/outfits/thecrimsonmuseset/Cm2.jpg",
      "/assets/Products/outfits/thecrimsonmuseset/Cm3.jpg",
      "/assets/Products/outfits/thecrimsonmuseset/Cm4.jpg",
      "/assets/Products/outfits/thecrimsonmuseset/Cm5.jpg",
      "/assets/Products/outfits/thecrimsonmuseset/Cm7.jpg"
    ],
    type: "outfits",
    freeSize: false,
    inStock: true,
    includes: [
      "The Crimson Muse Set",
      "Premium packaging box"
    ],
    fabricCare: [
      "Dry clean only",
      "Iron at low temperature",
      "Do not bleach"
    ],
    faqs: [
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order to ensure the perfect fit."
      }
    ]
  },
  {
    id: "thesapphiresongbird",
    name: "The Sapphire Songbird",
    collection: "outfits",
    category: "Outfits",
    price: 2499,
    description: "Elegant sapphire tones meet modern styling in this stunning outfit. Perfect for making a sophisticated statement.",
    images: [
      "/assets/Products/outfits/thesapphiresongbird/Tss1.jpg",
      "/assets/Products/outfits/thesapphiresongbird/Tss2.jpg",
      "/assets/Products/outfits/thesapphiresongbird/Tss3.jpg"
    ],
    type: "outfits",
    freeSize: false,
    inStock: true,
    includes: [
      "The Sapphire Songbird Outfit",
      "Premium packaging box"
    ],
    fabricCare: [
      "Dry clean only",
      "Iron at low temperature",
      "Do not bleach"
    ],
    faqs: [
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order to ensure the perfect fit."
      }
    ]
  },
  {
    id: "thesspressosatinset",
    name: "The Espresso Satin Set",
    collection: "outfits",
    category: "Outfits",
    price: 2499,
    description: "A luxurious satin set in a deep espresso hue, designed for effortless elegance and comfort.",
    images: [
      "/assets/Products/outfits/thesspressosatinset/E1.jpg",
      "/assets/Products/outfits/thesspressosatinset/E2.jpg"
    ],
    type: "outfits",
    freeSize: false,
    inStock: true,
    includes: [
      "The Espresso Satin Set",
      "Premium packaging box"
    ],
    fabricCare: [
      "Dry clean only",
      "Iron at low temperature",
      "Do not bleach"
    ],
    faqs: [
      {
        question: "Is this made to order?",
        answer: "Yes, each piece is handcrafted upon order to ensure the perfect fit."
      }
    ]
  }
];

// Helper Function to Get Product
export function getProduct(collection?: string, productId?: string) {
  if (!collection || !productId) return undefined;

  return products.find(
    (p) =>
      p.collection.toLowerCase() === collection.toLowerCase() &&
      p.id.toLowerCase() === productId.toLowerCase()
  );
}

// Helper Function to Get Products by Collection
export function getProductsByCollection(collection: string) {
  return products.filter(
    (p) => p.collection.toLowerCase() === collection.toLowerCase()
  );
}
