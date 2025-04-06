import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We'd love to hear from you! Reach out with questions, feedback, or
          just to say hello.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name">Name</label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    123 Farmley Lane, Dry Fruit District
                    <br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">
                    <Link href="tel:+911234567890" className="hover:underline">
                      +91 12345 67890
                    </Link>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Monday to Saturday, 9 AM to 6 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    <Link
                      href="mailto:support@farmley.com"
                      className="hover:underline"
                    >
                      support@farmley.com
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card>
            <CardHeader>
              <CardTitle>Find Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                {/* Replace with your actual map embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715257845924!2d72.8242144153779!3d19.04355725872683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96a34dc4401%3A0x3ffc07e83942b13f!2sMumbai!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <div className="flex gap-4 justify-center">
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
