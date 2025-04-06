import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

interface FooterSection {
  title: string;
  links: NavLink[];
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

/*
export const Products: Product[] = [
  {
    id: "1",
    name: "Plain Cashew",
    description:
      "Handpicked, premium-quality cashews with a natural creamy taste.",
    price: 499,
    rating: 4.8,
    image: "/images/products/cashew-plain.jpg",
    category: "nuts",
  },
  {
    id: "2",
    name: "Salted Cashew",
    description:
      "Deliciously roasted cashews with a light touch of salt for the perfect snack.",
    price: 549,
    rating: 4.6,
    image: "/images/products/cashew-salted.jpg",
    category: "nuts",
  },
  // Add more products...
];

*/

export const FOOTER_LINKS: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Customer Support",
    links: [
      { label: "FAQs", href: "/faq" },
      { label: "Return Policy", href: "/return-policy" },
      { label: "Shipping Policy", href: "/shipping-policy" },
      { label: "Contact Support", href: "/contact" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Facebook", url: "#", icon: Facebook },
  { name: "Instagram", url: "#", icon: Instagram },
  { name: "Twitter", url: "#", icon: Twitter },
  { name: "LinkedIn", url: "#", icon: Linkedin },
];
