"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mx-auto w-full max-w-screen">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ml-8">
          <Link href="/" className="text-xl font-bold text-primary">
            <Image
              src={"/images/Asset 26BW.png"}
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on mobile, shown on lg and up */}
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side - Social Media Icons & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Social Media Icons - Hidden on mobile, shown on lg and up */}
          <div className="hidden lg:flex items-center gap-1 mr-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-10 w-10 p-0 hover:bg-primary/10"
                >
                  <Link href={social.url} aria-label={social.name}>
                    <Icon className="h-8 w-8" />
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu Button - Hidden on lg and up, shown on mobile */}
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <nav className="absolute top-16 right-0 w-48 bg-background border border-gray-200 rounded-md shadow-md lg:hidden">
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

            {/* Social Media Icons in Mobile Menu */}
            <div className="border-t border-gray-200 pt-2 pb-2">
              <div className="flex justify-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="sm"
                      asChild
                      className="h-8 w-8 p-0 hover:bg-primary/10"
                    >
                      <Link href={social.url} aria-label={social.name}>
                        <Icon className="h-4 w-4" />
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
