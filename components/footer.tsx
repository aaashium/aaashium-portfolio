import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-mono font-bold">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="text-foreground">AC</span>
          <span className="text-primary">_</span>
        </a>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm font-mono">
          &copy; {new Date().getFullYear()} Alex Chen. All rights reserved.
        </p>

        {/* Status */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="font-mono">Systems Secure</span>
        </div>
      </div>
    </footer>
  );
}
