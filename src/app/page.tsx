import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Testimonial } from "@/components/testimonial";
import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <HeroCarousel />
        <div className="container absolute inset-0 flex h-full flex-col items-start justify-center gap-4 text-white ml-5 z-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to Farmlyf
          </h1>
          <p className="max-w-[600px] text-lg">
            Your one-stop destination for premium quality dry fruits. Our
            products are sourced from the finest farms to ensure freshness and
            nutrition in every bite.
          </p>
          <p className="text-xl font-semibold italic">
            &quot;Pure, Nutritious, and Delicious Dry Fruits.&quot;
          </p>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">About Farmlyf</h2>
            <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              At Farmlyf, we are passionate about bringing you the finest dry fruits directly from trusted farmers. Our commitment to quality and authenticity ensures that every product meets the highest standards.
            </p>
            <div className="grid gap-6">
              <h3 className="text-xl font-semibold mb-2">Why Choose Farmlyf?</h3>
              <ul className="grid gap-4">
                <li className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label="Leaf">🌱</span>
                  <span>100% Natural and Fresh</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label="Handshake">🤝</span>
                  <span>Ethically Sourced</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label="Check Mark">✅</span>
                  <span>Quality Assured</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative h-[350px] w-[350px] rounded-xl overflow-hidden shadow-xl p-20">
            <Image
              src="/images/about.webp"
              alt="Farmlyf dry fruits"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-secondary/60 to-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-14 text-primary">
            What Our Customers Say
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <Testimonial
              quote="Absolutely love the freshness of Farmlyf's cashew. Highly recommend!"
              author="Priya S."
            />
            <Testimonial
              quote="The best dry fruits I've ever had. Great taste and quality!"
              author="Rahul K."
            />
            <Testimonial
              quote="Perfect for gifting! The packaging was elegant and premium."
              author="Ananya M."
            />
          </div>
        </div>
      </section>
    </>
  );
}
