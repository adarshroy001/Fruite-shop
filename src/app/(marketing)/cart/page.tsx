"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductsContext } from "@/context/productContext";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

// Mock cart data - replace with your actual data source
const cartItems = [
  {
    id: "1",
    name: "Plain Cashew",
    price: 499,
    quantity: 2,
    image: "/images/products/cashew-plain.jpg",
    maxQuantity: 10,
  },
  {
    id: "2",
    name: "Salted Cashew",
    price: 549,
    quantity: 1,
    image: "/images/products/cashew-salted.jpg",
    maxQuantity: 10,
  },
];

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  maxQuantity: number;
}

export default function CartPage() {
  const [productinfo, setProductinfo] = useState<Product[]>([]);

  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);
  useEffect(() => {
    const unique_id = [...new Set(selectedProducts)];
    try {
      const fetchProduct = async () => {
        const response = await axios.get(
          "/api/product?ids=" + unique_id.join(",")
        );
        setProductinfo(response.data.product);
      };
      fetchProduct();
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }, []);

  let subtotal = 0;

  for (let i = 0; i < productinfo.length; i++) {
    subtotal +=
      productinfo[i].price *
      selectedProducts.filter((item: any) => item === productinfo[i].id).length;
  }

  let shippingFee = subtotal > 1000 ? 0 : 50;
  let total = subtotal + shippingFee;

  function lessOf(id: string) {
    setSelectedProducts((prev: any) => prev.filter((item: any) => item !== id));
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Your Shopping Cart</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-8">
          <Card>
            <CardHeader>
              <CardTitle>Items ({cartItems.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="w-10"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productinfo.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                            <CldImage
                              src={item.image}
                              alt={item.title}
                              fill
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-muted-foreground">
                              ₹{item.price}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Input
                          type="number"
                          min="1"
                          max={item.maxQuantity}
                          defaultValue={
                            selectedProducts.filter(
                              (id: string) => id === item.id
                            ).length
                          }
                          className="w-20"
                          readOnly
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        ₹{item.price}
                      </TableCell>
                      <TableCell className="text-right">
                        ₹
                        {item.price *
                          selectedProducts.filter(
                            (id: string) => id === item.id
                          ).length}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => lessOf(item.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="justify-between border-t">
              <Button variant="outline" asChild>
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button variant="outline">Update Cart</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shippingFee === 0 ? "Free" : `₹${shippingFee}`}</span>
              </div>
              <div className="flex justify-between border-t pt-4 font-medium">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg" asChild>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg">Promo Code</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input placeholder="Enter promo code" />
                <Button variant="secondary">Apply</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
