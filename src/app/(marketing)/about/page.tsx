import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Leaf, ShieldCheck, Sprout, Truck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-12 ml-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Our Story</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          From farm to table - our journey of bringing you the finest dry fruits
        </p>
      </div>

      <div className="grid gap-12 ">
        {/* Our Story Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Welcome to Farmlyf
            </h2>
            <p className="text-muted-foreground mb-4">
              Where quality meets tradition. Our journey began with a simple
              goal - to bring the finest dry fruits from trusted farmers
              directly to your home.
            </p>
            <p className="text-muted-foreground mb-4">
              With a focus on purity and freshness, we ensure every bite is
              packed with nutrition and taste. At Farmley, we celebrate the rich
              heritage of dry fruits while embracing innovation to meet modern
              tastes.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Leaf className="h-5 w-5" />
              <span className="font-medium">100% Natural Products</span>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/About.jpeg"
              alt="Farmley story"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="bg-secondary rounded-lg p-8">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
            Our Sustainability Promise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Sprout className="h-10 w-10 text-green-500" />
                <CardTitle>Eco-Friendly Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Minimizing carbon footprints and reducing waste through
                  sustainable packaging and logistics.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <ShieldCheck className="h-10 w-10 text-blue-500" />
                <CardTitle>Fair Trade Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                Using recyclable and biodegradable materials.
                Choosing Farmlyf means supporting a greener, healthier future.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Truck className="h-10 w-10 text-orange-500" />
                <CardTitle>Sustainable Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Using recyclable and biodegradable materials to protect both
                  your food and our planet.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src={"/images/fssai.png"}
                  alt="fssai"
                  height={100}
                  width={100}
                  className="bg-white"
                />
                <CardTitle>FSSAI Approved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground"></p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
            Why Choose Farmlyf
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Premium Quality: Sourced from the best farms, processed with utmost care",
              "No Additives: Pure, natural goodness in every bite",
              "Certified Excellence: Compliant with industry standards",
              "Customer-Centric: Dedicated support for seamless shopping",
            ].map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
