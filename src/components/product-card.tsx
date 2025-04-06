"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { CldImage } from "next-cloudinary";

import { useCallback, useContext } from "react";
import axios from "axios";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCallback(async () => {
    try {
      const response = await axios.post(`/api/cart/${product.id}`);
      console.log(response.data);
    } catch (error) {
      throw new Error("Failed to add to cart");
    }
  }, []);

  return (
    <div className="group relative overflow-hidden rounded-lg border">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <CldImage
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold tracking-tight">{product.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold">₹{product.price}</span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{product.rating}</span>
          </div>
        </div>
        <Button size="sm" className="mt-4 w-full" onClick={addToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
