"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";

const footerLinks = {
  product: [
    { title: "Features", href: "/#features" },
    { title: "How it Works", href: "/#how-it-works" },
    { title: "Pricing", href: "/#pricing" },
    { title: "FAQ", href: "/#faq" },
  ],
  resources: [
    { title: "Blog", href: "/blog" },
    { title: "Documentation", href: "/docs" },
    { title: "Templates", href: "/templates" },
    { title: "Examples", href: "/examples" },
  ],
  company: [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgb(0_0_0/0.1)] bg-paper-200">
      <div className="container py-xl">
        <div className="grid grid-cols-1 gap-xl lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-md">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-accent-500" />
              <span className="font-heading text-xl font-bold text-ink-900">
                StoryForge
              </span>
            </Link>
            <p className="text-sm text-ink-600 max-w-[25ch]">
              Transform your ideas into beautifully crafted books with AI
              assistance.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-2 grid grid-cols-2 gap-xl md:grid-cols-3">
            <div className="space-y-md">
              <h4 className="font-heading text-sm font-semibold text-ink-900">
                Product
              </h4>
              <ul className="space-y-sm">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-600 hover:text-ink-900 transition-base"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-md">
              <h4 className="font-heading text-sm font-semibold text-ink-900">
                Resources
              </h4>
              <ul className="space-y-sm">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-600 hover:text-ink-900 transition-base"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-md">
              <h4 className="font-heading text-sm font-semibold text-ink-900">
                Company
              </h4>
              <ul className="space-y-sm">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-600 hover:text-ink-900 transition-base"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-md">
            <h4 className="font-heading text-sm font-semibold text-ink-900">
              Stay Updated
            </h4>
            <p className="text-sm text-ink-600">
              Get the latest updates and news.
            </p>
            <form className="flex gap-2xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-sm flex-1"
              />
              <button type="submit" className="btn btn-sm btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-xl pt-lg border-t border-[rgb(0_0_0/0.1)] text-center">
          <p className="text-sm text-ink-600">
            © {new Date().getFullYear()} StoryForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
