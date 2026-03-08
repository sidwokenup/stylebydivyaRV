// Product Data Structure
export interface FAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  collection: string;
  price: number;
  description: string;
  images: string[];
  type: "wrapstyle" | "indowestern" | "sareerevamp";
  freeSize?: boolean;
  inStock?: boolean;
  includes: string[];
  fabricCare: string[];
  faqs: FAQ[];
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
    price: 6499,
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
    id: "divya's-versatile-brown-wrap-dress",
    name: "Divya's Versatile Brown Wrap Dress",
    collection: "wrapstyles",
    price: 7499,
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
    price: 7499,
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
    price: 7499,
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
    price: 7499,
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
    price: 7499,
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
    price: 4499,
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
    price: 9999,
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

