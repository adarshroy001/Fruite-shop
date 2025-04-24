"use client";
import Link from "next/link";
import {
  ShoppingCart,
  Search,
  User,
  LogOut,
  Package,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NAV_LINKS } from "@/lib/constants";
import { useSession } from "next-auth/react";
import axios from "axios";
import { set } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "@/context/productContext";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signOut } from "next-auth/react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const { data: session } = useSession();
  const [length, setLength] = useState("");
  const { selectedProducts } = useContext(ProductsContext);

  const user = session?.user;

  const initials = user?.name
    ?.split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  useEffect(() => {
    setLength(selectedProducts.length);
    console.log(length);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center ml-8 gap-10">
          <Link href="/" className="text-xl font-bold text-primary">
            <Image
              src={"/images/Asset 26BW.png"}
              width={100}
              height={100}
              alt="logo"
            />
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
        </div>
      </div>
    </header>
  );
}
