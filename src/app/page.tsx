"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Testimonial } from "@/components/testimonial";
import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useState } from "react";

interface FeaturedProduct {
  id: number;
  name: string;
  image: string;
  color: string;
}

interface LaunchedProduct {
  id: number;
  name: string;
  images: string[];
  description: string;
  price: string;
}

export default function Home() {
  const featuredProducts: FeaturedProduct[] = [
    {
      id: 1,
      name: "Almond",
      image: "/images/almond.png",
      color: "bg-amber-800",
    },
    {
      id: 2,
      name: "Cashew",
      image: "/images/cashew.png",
      color: "bg-teal-600",
    },
    {
      id: 3,
      name: "Pista",
      image: "/images/pista.png",
      color: "bg-olive-600",
    },
    {
      id: 4,
      name: "Walnut",
      image: "/images/walnut.png",
      color: "bg-rose-800",
    },
    {
      id: 5,
      name: "Raisin",
      image: "/images/raisin.png",
      color: "bg-orange-600",
    },
  ];

  const launchedProducts: LaunchedProduct[] = [
    {
      id: 1,
      name: "Plain Cashew",
      images: ["/images/plain-cashew.png", "/images/back-plain-cashew.png"],
      description: "Premium quality plain cashews, naturally sweet and crunchy",
      price: "₹499",
    },
    {
      id: 2,
      name: "Salted Cashew",
      images: ["/images/salted-cashew.png", "/images/back-salt-cashew.png"],
      description: "Perfectly salted cashews for the perfect snack",
      price: "₹549",
    },
  ];

  const [currentSlides, setCurrentSlides] = useState<Record<number, number>>(
    launchedProducts.reduce((acc: Record<number, number>, product) => {
      acc[product.id] = 0;
      return acc;
    }, {})
  );

  // Zoom modal states
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomedImageName, setZoomedImageName] = useState<string>("");

  const nextSlide = (productId: number, totalImages: number) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [productId]: (prev[productId] + 1) % totalImages,
    }));
  };

  const prevSlide = (productId: number, totalImages: number) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [productId]:
        prev[productId] === 0 ? totalImages - 1 : prev[productId] - 1,
    }));
  };

  const openZoom = (imageSrc: string, productName: string) => {
    setZoomedImage(imageSrc);
    setZoomedImageName(productName);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeZoom = () => {
    setZoomedImage(null);
    setZoomedImageName("");
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] md:h-[500px] w-full">
        <HeroCarousel />
        <div className="container absolute inset-0 flex h-full flex-col items-start justify-center gap-2 sm:gap-3 md:gap-4 text-white z-10 w-full max-w-screen overflow-x-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            Welcome to Farmlyf
          </h1>
          <p className="max-w-[90%] sm:max-w-[600px] text-sm sm:text-base md:text-lg leading-relaxed">
            Your one-stop destination for premium quality dry fruits. Our
            products are sourced from the finest farms to ensure freshness and
            nutrition in every bite.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-semibold italic">
            &quot;Pure, Nutritious, and Delicious Dry Fruits.&quot;
          </p>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-8 sm:py-12 md:py-30 bg-white w-full max-w-screen overflow-x-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-primary">
            Our Premium Collection
          </h2>

          {/* Product Carousel */}
          <div className="relative mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center justify-center">
              <button className="absolute left-0 sm:left-2 z-10 bg-white shadow-lg rounded-full p-1.5 sm:p-2 hover:bg-gray-50 hidden sm:block">
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>

              <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-2 sm:px-8 md:px-12 pb-2">
                {featuredProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-xl sm:rounded-2xl ${product.color} flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer p-2 sm:p-3 md:p-4`}
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-1 sm:mb-2 md:mb-3 flex items-center justify-center bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-sm">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={96}
                        height={96}
                        className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                        style={{
                          filter:
                            "drop-shadow(0 2px 4px rgba(255,255,255,0.1))",
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-center">
                      {product.name}
                    </h3>
                  </div>
                ))}
              </div>

              <button className="absolute right-0 sm:right-2 z-10 bg-white shadow-lg rounded-full p-1.5 sm:p-2 hover:bg-gray-50 hidden sm:block">
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Launched Products Section */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-primary">
              Our Launched Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
              {launchedProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group">
                    {/* Slide Navigation Buttons */}
                    {product.images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            prevSlide(product.id, product.images.length)
                          }
                          className="absolute left-2 z-20 bg-white/80 hover:bg-white shadow-md rounded-full p-1.5 transition-all duration-200"
                        >
                          <ChevronLeft className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          onClick={() =>
                            nextSlide(product.id, product.images.length)
                          }
                          className="absolute right-2 z-20 bg-white/80 hover:bg-white shadow-md rounded-full p-1.5 transition-all duration-200"
                        >
                          <ChevronRight className="w-4 h-4 text-gray-600" />
                        </button>
                      </>
                    )}

                    {/* Zoom Button */}
                    <button
                      onClick={() =>
                        openZoom(
                          product.images[currentSlides[product.id]],
                          product.name
                        )
                      }
                      className="absolute top-2 right-2 z-20 bg-white/80 hover:bg-white shadow-md rounded-full p-1.5 transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <ZoomIn className="w-4 h-4 text-gray-600" />
                    </button>

                    {/* Product Image */}
                    <div
                      className="cursor-pointer w-full h-full flex items-center justify-center"
                      onClick={() =>
                        openZoom(
                          product.images[currentSlides[product.id]],
                          product.name
                        )
                      }
                    >
                      <Image
                        src={product.images[currentSlides[product.id]]}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="object-contain max-w-[180px] max-h-[180px] sm:max-w-[150px] sm:max-h-[150px] md:max-w-[180px] md:max-h-[180px] drop-shadow-md transition-all duration-300 group-hover:scale-105"
                        style={{
                          width: "auto",
                          height: "auto",
                        }}
                      />
                    </div>

                    {/* Slide Indicators */}
                    {product.images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
                        {product.images.map((_, index: number) => (
                          <button
                            key={index}
                            onClick={() =>
                              setCurrentSlides((prev) => ({
                                ...prev,
                                [product.id]: index,
                              }))
                            }
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              currentSlides[product.id] === index
                                ? "bg-gray-600"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gift Box Collection */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-primary">
              Premium Gift Box Collection
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
              Perfect for festivals, celebrations, and special occasions. Our
              premium gift boxes contain a curated selection of the finest dry
              fruits.
            </p>
            <div className="relative h-80 sm:h-48 md:h-64 mb-4 sm:mb-6 flex items-center justify-center">
              <Image
                src="/images/gift_product.png"
                alt="Premium Gift Box Collection"
                width={750}
                height={300}
                className="object-contain max-w-[280px] max-h-[160px] sm:max-w-[400px] sm:max-h-[200px] md:max-w-[750px] md:max-h-[300px] drop-shadow-lg"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Product Name */}
            <div className="absolute top-4 left-4 z-10 bg-white/90 px-3 py-1 rounded-full">
              <h3 className="text-sm font-medium text-gray-700">
                {zoomedImageName}
              </h3>
            </div>

            {/* Zoomed Image */}
            <div className="flex items-center justify-center p-8">
              <Image
                src={zoomedImage}
                alt={zoomedImageName}
                width={800}
                height={800}
                className="object-contain max-w-full max-h-[80vh] rounded-lg"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-secondary/60 to-white py-12 sm:py-16 md:py-20 w-full max-w-screen overflow-x-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-14 text-primary">
            What Our Customers Say
          </h2>
          <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
