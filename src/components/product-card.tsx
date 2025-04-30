"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { CldImage } from "next-cloudinary";

import { useCallback, useContext } from "react";
import axios from "axios";
import { ProductsContext } from "@/context/productContext";
import { useSession } from "next-auth/react";

export interface Product {
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
  const { setSelectedProducts } = useContext(ProductsContext);

  const { data: session } = useSession();

  const addToCart = () => {
    if (!session) return;
    setSelectedProducts((prev: string[]) => [...prev, product.id]);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border">
      <div className="relative aspect-square overflow-hidden bg-gray-100 p-15">
        <CldImage
          src={product.image}
          alt={product.title}
          width={600}
          height={600}
          className="object-contain transition-transform group-hover:scale-108"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold tracking-tight">{product.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
          {product.description}
        </p>
      </div>
    </div>
  );
}
