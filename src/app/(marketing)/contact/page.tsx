import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container py-12 mx-auto px-2 md:px-8 lg:px-16 w-full max-w-screen overflow-x-hidden">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We'd love to hear from you! Reach out with questions, feedback, or
          just to say hello.
        </p>
      </div>

      {/* Centered Card Container */}
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    HIG-461,K-5 Subudhipur, Kalinga Nagar
                    <br />
                    Bhubaneswar, Khorda Nagar, orissa-751019
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Manufacturing Unit Address</h3>
                  <p className="text-muted-foreground">
                    HIG-461,K-5 Subudhipur, Kalinga Nagar
                    <br />
                    Bhubaneswar, Khorda Nagar, orissa-751019
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">
                    <Link href="tel:+911234567890" className="hover:underline">
                      1800 890 8177
                    </Link>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    24/7 support services
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    <Link
                      href="mailto:care@farmlyf.in"
                      className="hover:underline"
                    >
                      care@farmlyf.in
                    </Link>
                    <br />
                    <Link
                      href="mailto:sales@farmlyf.in"
                      className="hover:underline"
                    >
                      sales@farmlyf.in
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <div className="flex gap-4 justify-center mt-8">
            {[
              { name: "Facebook", icon: "facebook", url: "#" },
              { name: "Instagram", icon: "instagram", url: "#" },
              { name: "Twitter", icon: "twitter", url: "#" },
              { name: "LinkedIn", icon: "linkedin", url: "#" },
            ].map((social) => (
              <Button key={social.name} variant="outline" size="icon" asChild>
                <Link href={social.url} aria-label={social.name}>
                  <span className="sr-only">{social.name}</span>
                  {/* Replace with actual icons */}
                  <div className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
