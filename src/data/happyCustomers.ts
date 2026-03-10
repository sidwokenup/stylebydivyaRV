export interface CustomerTestimonial {
  id: number;
  name: string;
  location: string;
  occasion: string;
  review: string;
  image: string;
}

export const HAPPY_CUSTOMERS: CustomerTestimonial[] = [
  {
    id: 1,
    name: "Chetna Arora",
    location: "Gurugram",
    occasion: "Mehndi Ceremony",
    review: "During my wedding rush, Style By Divya designed the perfect dress for my Mehndi ceremony exactly how I imagined it",
    image: "/assets/customers/chetna_v1.jpg",
  },
];
