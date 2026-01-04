"use client";

import { Mail, MapPin, Globe, Send, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ScrollView } from "./scroll-view";
import { useState } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-32 bg-gray-50 dark:bg-transparent" id="contact">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center space-y-6">
          <ScrollView>
            <h2 className="text-4xl font-semibold lg:text-5xl">
              Get in Touch
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              I&apos;m always open to discussing new opportunities, collaborations,
              or just having a chat. Feel free to reach out!
            </p>
          </ScrollView>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollView delay={0.3}>
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="size-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
                {submitStatus === "success" && (
                  <p className="text-sm text-green-600 dark:text-green-400 text-center">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-red-600 dark:text-red-400 text-center">
                    Failed to send message. Please try again or email me directly.
                  </p>
                )}
              </form>
            </Card>
          </ScrollView>

          {/* Contact Info Cards */}
          <ScrollView delay={0.4}>
            <div className="space-y-4">
              <Card className="p-6 hover:bg-white dark:hover:bg-gray-900/50 transition-colors">
                <Link href="mailto:parth.c.shah@gmail.com" className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">parth.c.shah@gmail.com</p>
                  </div>
                </Link>
              </Card>

              <Card className="p-6 hover:bg-white dark:hover:bg-gray-900/50 transition-colors">
                <Link href="https://parthshah.org" target="_blank" className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Globe className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Website</h3>
                    <p className="text-sm text-muted-foreground">parthshah.org</p>
                  </div>
                </Link>
              </Card>

              <Card className="p-6 hover:bg-white dark:hover:bg-gray-900/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-sm text-muted-foreground">Mackay, Australia</p>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  );
}
