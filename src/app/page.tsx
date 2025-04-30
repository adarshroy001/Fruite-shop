import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Testimonial } from "@/components/testimonial";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center brightness-50" />
        <div className="container relative flex h-full flex-col items-start justify-center gap-4 text-white ml-5">
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
          <Button asChild size="lg">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-16 ml-5">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">About Farmlyf</h2>
            <p className="mt-4 text-muted-foreground">
              At Farmlyf, we are passionate about bringing you the finest dry
              fruits directly from trusted farmers. Our commitment to quality
              and authenticity ensures that every product meets the highest
              standards.
            </p>
            <div className="mt-8 grid gap-4">
              <h3 className="text-xl font-semibold">Why Choose Farmlyf?</h3>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  100% Natural and Fresh
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Ethically Sourced
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Quality Assured
                </li>
              </ul>
            </div>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/about.webp"
              alt="Farmley dry fruits"
              height={300}
              width={300}
              className="object-cover align-center"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-16 ml-5">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight mb-12">
            What Our Customers Say
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
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
