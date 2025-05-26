import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Testimonial } from "@/components/testimonial";
import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const featuredProducts = [
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

  const launchedProducts = [
    {
      id: 1,
      name: "Plain Cashew",
      image: "/images/plain-cashew.png",
      description: "Premium quality plain cashews, naturally sweet and crunchy",
      price: "₹499",
    },
    {
      id: 2,
      name: "Salted Cashew",
      image: "/images/salted-cashew.png",
      description: "Perfectly salted cashews for the perfect snack",
      price: "₹549",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <HeroCarousel />
        <div className="container absolute inset-0 flex h-full flex-col items-start justify-center gap-4 text-white z-10 w-full max-w-screen overflow-x-hidden mx-auto px-2 md:px-8 lg:px-16">
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

      {/* Featured Products Carousel */}
      <section className="py-16 bg-white w-full max-w-screen overflow-x-hidden mx-auto px-2 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Our Premium Collection
          </h2>

          {/* Product Carousel */}
          <div className="relative mb-16">
            <div className="flex items-center justify-center">
              <button className="absolute left-0 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50">
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-4 overflow-x-auto scrollbar-hide px-12">
                {featuredProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`flex-shrink-0 w-48 h-48 rounded-2xl ${product.color} flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer p-4`}
                  >
                    <div className="w-32 h-32 mb-3 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-sm">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={96}
                        height={96}
                        className="object-contain w-24 h-24"
                        style={{
                          filter:
                            "drop-shadow(0 2px 4px rgba(255,255,255,0.1))",
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-center">
                      {product.name}
                    </h3>
                  </div>
                ))}
              </div>

              <button className="absolute right-0 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Launched Products Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
              Our Launched Products
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {launchedProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="object-contain max-w-[180px] max-h-[180px] drop-shadow-md"
                      style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "180px",
                        maxHeight: "180px",
                      }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gift Box Collection */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Premium Gift Box Collection
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Perfect for festivals, celebrations, and special occasions. Our
              premium gift boxes contain a curated selection of the finest dry
              fruits.
            </p>
            <div className="relative h-64 mb-6 flex items-center justify-center">
              <Image
                src="/images/gift_product.png"
                alt="Premium Gift Box Collection"
                width={300}
                height={240}
                className="object-contain max-w-[750px] max-h-[300px] drop-shadow-lg"
                style={{
                  width: "750px",
                  height: "300px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About section */}

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-secondary/60 to-white py-20 w-full max-w-screen overflow-x-hidden mx-auto px-2 md:px-8 lg:px-16">
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
