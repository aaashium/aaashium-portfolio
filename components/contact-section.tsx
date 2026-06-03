"use client";

import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
          // Get in Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
          {"Let's Work Together"}
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Looking for a security expert to strengthen your defenses or conduct
          thorough penetration testing? I&apos;d love to hear about your project.
        </p>

        {/* Email CTA */}
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono mb-12"
          asChild
        >
          <a href="mailto:ashish.y2537@gmail.com">
            <Mail className="mr-2 h-5 w-5" />
            ashish.y2537@gmail.com
          </a>
        </Button>

        {/* Social links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label={social.label}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
