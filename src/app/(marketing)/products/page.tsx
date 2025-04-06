"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/product-card";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsPage() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/product");

        setProduct(response.data.product);
      } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch products");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Our Premium Dry Fruits
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our carefully curated selection of premium dry fruits
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-[300px]">
          <Input placeholder="Search products..." className="pl-10" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Products</SelectItem>
            <SelectItem value="nuts">Nuts</SelectItem>
            <SelectItem value="seeds">Seeds</SelectItem>
            <SelectItem value="dried-fruits">Dried Fruits</SelectItem>
            <SelectItem value="gift-boxes">Gift Boxes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {product.map((product, Index) => (
          <ProductCard key={Index} product={product} />
        ))}
      </div>
    </div>
  );
}
