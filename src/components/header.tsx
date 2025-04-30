"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

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
        </div>

        <div className="flex items-end gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-10 w-[200px] lg:w-[300px]"
            />
          </div>

          <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {menuOpen && (
          <nav className="absolute top-16 right-0 w-48 bg-background border border-gray-200 rounded-md shadow-md">
            <ul className="flex flex-col p-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="mb-2 last:mb-0">
                  <Link
                    href={link.href}
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
