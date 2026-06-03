"use client";

import { useState, useEffect } from "react";
import { Shield, Terminal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Securing digital frontiers";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Profile Photo with premium styling */}
        <div className="relative flex-shrink-0 order-first lg:order-last">
          {/* Outer glow ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-full blur-md opacity-75 animate-pulse" />
          {/* Inner border */}
          <div className="relative p-1 bg-gradient-to-br from-primary via-primary/30 to-primary rounded-full">
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-background">
              <Image
                src="/images/profile.jpg"
                alt="Aashish Kumar Yadav - Cyber Security Expert"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay for cohesion */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-primary rounded-full bg-background" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary rounded-full" />
        </div>

        <div className="max-w-4xl text-center lg:text-left">
        {/* Status indicator */}
        <div className="flex items-center gap-2 mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-sm text-muted-foreground font-mono tracking-wider uppercase">
            Available for new opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Aashish Kumar Yadav</span>
          <br />
          <span className="text-primary">Cyber Security</span>
          <br />
          <span className="text-muted-foreground">Expert</span>
        </h1>

        {/* Typing effect tagline */}
        <div className="flex items-center gap-2 mb-8 font-mono">
          <Terminal className="h-5 w-5 text-primary" />
          <span className="text-lg md:text-xl text-muted-foreground">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Penetration tester and security architect with 8+ years of experience
          protecting critical infrastructure. Specialized in red team
          operations, vulnerability assessment, and building resilient security
          frameworks.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono"
            onClick={scrollToProjects}
          >
            <Shield className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-secondary font-mono"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to projects"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </button>
    </section>
  );
}
