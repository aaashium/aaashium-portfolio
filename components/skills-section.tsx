"use client";

import { Shield, Code, Network, Lock, Database, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Offensive Security",
    icon: Shield,
    skills: [
      "Penetration Testing",
      "Red Team Operations",
      "Social Engineering",
      "Exploit Development",
      "Vulnerability Assessment",
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "Rust", "Go", "Bash", "JavaScript", "C/C++"],
  },
  {
    title: "Network Security",
    icon: Network,
    skills: [
      "Firewall Configuration",
      "IDS/IPS",
      "Traffic Analysis",
      "VPN Setup",
      "Network Forensics",
    ],
  },
  {
    title: "Cryptography",
    icon: Lock,
    skills: [
      "PKI",
      "TLS/SSL",
      "Encryption Algorithms",
      "Key Management",
      "Digital Signatures",
    ],
  },
  {
    title: "Tools & Frameworks",
    icon: Database,
    skills: [
      "Metasploit",
      "Burp Suite",
      "Nmap",
      "Wireshark",
      "OWASP ZAP",
      "Ghidra",
    ],
  },
  {
    title: "Cloud Security",
    icon: Cloud,
    skills: [
      "AWS Security",
      "Azure Sentinel",
      "GCP IAM",
      "Container Security",
      "Kubernetes",
    ],
  },
];

const certifications = [
  "OSCP",
  "CISSP",
  "CEH",
  "GPEN",
  "AWS Security Specialty",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            // Technical Arsenal
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Comprehensive security toolkit built over years of hands-on
            experience in both offensive and defensive operations.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="border-t border-border pt-12">
          <h3 className="font-semibold text-lg mb-6 text-center">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="px-6 py-3 bg-secondary border border-border rounded-lg font-mono text-sm hover:border-primary/50 transition-colors"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
