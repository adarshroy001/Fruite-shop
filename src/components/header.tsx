"use client";
import Link from "next/link";
import { ShoppingCart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NAV_LINKS } from "@/lib/constants";
import { useSession } from "next-auth/react";
import axios from "axios";
import { set } from "react-hook-form";
import { useEffect, useState } from "react";

export default function Header() {
  const { data: session } = useSession();
  const [length, setLength] = useState("");

  useEffect(() => {
    const cart = async () => {
      try {
        if (!session) {
          return;
        }
        const response = await axios.get("/api/cart");
        setLength(response.data.length);
      } catch (error) {
        throw new Error("Failed to get cart");
      }
    };
    cart();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-bold text-primary">
            Farmley
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-10 w-[200px] lg:w-[300px]"
            />
          </div>

          <Button variant="ghost" size="icon">
            <Link href="/sign-in">
              {" "}
              <User className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                {session ? length : 0}
              </span>{" "}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
