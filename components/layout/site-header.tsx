"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, BookOpen } from "lucide-react";

const mainNav = [
  {
    title: "Features",
    href: "/#features",
  },
  {
    title: "How it Works",
    href: "/#how-it-works",
  },
  {
    title: "Pricing",
    href: "/#pricing",
  },
  {
    title: "FAQ",
    href: "/#faq",
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[rgb(0_0_0/0.1)] bg-paper-100/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-accent-500" />
          <span className="font-heading text-xl font-bold text-ink-900">
            StoryForge
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-base hover:text-ink-900 ${
                pathname === item.href ? "text-ink-900" : "text-ink-600"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden items-center space-x-2 md:flex">
          <Link href="/sign-in" className="btn btn-sm btn-outline">
            Sign In
          </Link>
          <Link href="/sign-up" className="btn btn-sm btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="btn btn-sm btn-outline md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-paper-100 md:hidden">
            <div className="container py-md">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-lg">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <BookOpen className="h-6 w-6 text-accent-500" />
                  <span className="font-heading text-xl font-bold text-ink-900">
                    StoryForge
                  </span>
                </Link>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close menu</span>×
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-md mb-xl">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-medium transition-base hover:text-ink-900 ${
                      pathname === item.href ? "text-ink-900" : "text-ink-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-2">
                <Link
                  href="/sign-in"
                  className="btn btn-lg btn-outline w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="btn btn-lg btn-primary w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
