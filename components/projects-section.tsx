"use client";

import { useState } from "react";
import { ExternalLink, Github, Lock, Shield, Bug, Server } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "SecureNet Scanner",
    description:
      "Enterprise-grade vulnerability scanner detecting 500+ CVEs with automated reporting and remediation suggestions.",
    tags: ["Python", "Network Security", "CVE Database", "Automation"],
    icon: Bug,
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "CryptoVault",
    description:
      "Zero-knowledge encryption system for sensitive data storage with multi-factor authentication and audit logging.",
    tags: ["Rust", "Cryptography", "Zero-Knowledge", "MFA"],
    icon: Lock,
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 3,
    title: "ThreatHunter AI",
    description:
      "Machine learning-powered threat detection platform analyzing network traffic patterns in real-time.",
    tags: ["Machine Learning", "Python", "Anomaly Detection", "SIEM"],
    icon: Shield,
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 4,
    title: "CloudGuard",
    description:
      "Multi-cloud security posture management tool for AWS, Azure, and GCP with compliance automation.",
    tags: ["Go", "AWS", "Azure", "GCP", "Terraform"],
    icon: Server,
    link: "#",
    github: "#",
    featured: false,
  },
];

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            // Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Projects & Research
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Open-source security tools and research projects focused on
            improving defensive capabilities.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.id}
                className={`group relative p-6 bg-card border-border transition-all duration-300 hover:border-primary/50 ${
                  project.featured ? "md:col-span-1" : ""
                }`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-primary/5 rounded-lg transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="relative z-10">
                  {/* Icon and featured badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-secondary rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    {project.featured && (
                      <Badge
                        variant="outline"
                        className="border-primary/50 text-primary"
                      >
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground font-mono text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a href={project.github}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a href={project.link}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
