import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Wand2,
  Zap,
  Brain,
  Layout,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper-100">
      {/* Hero Section */}
      <section className="py-2xl lg:py-3xl">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-xl">
            <div className="flex-1 text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 px-md py-xs rounded-sm bg-accent-100 text-accent-500 mb-lg">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">AI-Powered Writing</span>
              </div>
              <h1 className="hero-text mb-lg">
                Write Your Story with{" "}
                <span className="text-accent-500">Intelligence</span>
              </h1>
              <p className="text-lg text-ink-600 max-w-[45ch] mx-auto lg:mx-0 mb-xl">
                Transform your ideas into beautifully crafted books using
                artificial intelligence. Write, edit, and publish with elegance.
              </p>
              <div className="flex flex-col sm:flex-row gap-md justify-center lg:justify-start">
                <button className="btn btn-lg btn-primary">
                  Start Writing <ChevronRight className="w-5 h-5" />
                </button>
                <button className="btn btn-lg btn-outline">
                  View Examples <BookOpen className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div
              className="flex-1 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-accent-100 rounded blur-2xl" />
                <div className="bg-paper-100 p-lg rounded border border-[rgb(0_0_0/0.1)] relative">
                  <div className="aspect-[4/3] rounded overflow-hidden relative bg-paper-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full p-lg">
                        {/* Book Preview */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-64 h-80 bg-paper-100 rounded shadow-lg transform rotate-3 transition-base hover:rotate-6">
                            <div className="h-full w-full p-md flex flex-col">
                              <div className="w-3/4 h-4 bg-accent-100 rounded mb-sm" />
                              <div className="w-1/2 h-4 bg-accent-100 rounded mb-lg" />
                              <div className="space-y-xs">
                                <div className="w-full h-2 bg-paper-300 rounded" />
                                <div className="w-full h-2 bg-paper-300 rounded" />
                                <div className="w-3/4 h-2 bg-paper-300 rounded" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Typing Indicator */}
                        <div className="absolute bottom-lg left-lg right-lg h-10 bg-paper-100 rounded shadow-sm flex items-center px-md border border-[rgb(0_0_0/0.1)]">
                          <div className="flex space-x-2xs">
                            <div
                              className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse"
                              style={{ animationDelay: "0ms" }}
                            />
                            <div
                              className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse"
                              style={{ animationDelay: "150ms" }}
                            />
                            <div
                              className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse"
                              style={{ animationDelay: "300ms" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-2xl bg-paper-200">
        <div className="container">
          <div className="text-center mb-xl animate-fade-in">
            <h2 className="text-3xl mb-md">Craft Your Story</h2>
            <p className="text-ink-600 text-lg max-w-[45ch] mx-auto">
              Everything you need to create professional books with AI
              assistance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card card-hover p-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mb-md rounded-sm bg-accent-500 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-xs">{feature.title}</h3>
                <p className="text-ink-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-2xl bg-paper-100">
        <div className="container">
          <div className="text-center mb-xl animate-fade-in">
            <h2 className="text-3xl mb-md">Simple Process</h2>
            <p className="text-ink-600 text-lg max-w-[45ch] mx-auto">
              Create your book in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-lg">
            {steps.map((step, index) => (
              <div
                key={index}
                className="card card-hover p-lg text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-md rounded-full bg-accent-500 flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-xs">{step.title}</h3>
                <p className="text-ink-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-2xl bg-accent-500">
        <div className="container">
          <div className="card p-xl text-center animate-fade-in max-w-3xl mx-auto">
            <h2 className="text-3xl mb-md">Ready to Start Writing?</h2>
            <p className="text-lg text-ink-600 mb-lg max-w-[45ch] mx-auto">
              Join thousands of authors who have already created amazing books
              with our AI-powered platform
            </p>
            <button className="btn btn-lg btn-secondary">
              Begin Your Journey <Wand2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "AI-Powered Writing",
    description:
      "Get intelligent suggestions and auto-completion as you write your story",
    icon: <Brain className="w-6 h-6 text-white" />,
  },
  {
    title: "Smart Editing",
    description:
      "Advanced editing tools with AI-powered grammar and style suggestions",
    icon: <Wand2 className="w-6 h-6 text-white" />,
  },
  {
    title: "Beautiful Templates",
    description:
      "Choose from a wide range of professional book templates and layouts",
    icon: <Layout className="w-6 h-6 text-white" />,
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with editors and collaborators in real-time",
    icon: <Zap className="w-6 h-6 text-white" />,
  },
  {
    title: "Export Options",
    description:
      "Export your book in multiple formats including PDF, EPUB, and MOBI",
    icon: <BookOpen className="w-6 h-6 text-white" />,
  },
  {
    title: "AI Illustrations",
    description:
      "Generate custom illustrations and cover art with AI assistance",
    icon: <Sparkles className="w-6 h-6 text-white" />,
  },
];

const steps = [
  {
    title: "Choose Your Style",
    description:
      "Select from various writing styles and genres that suit your story",
  },
  {
    title: "Write & Refine",
    description: "Let AI assist you in crafting and polishing your narrative",
  },
  {
    title: "Publish & Share",
    description:
      "Export your finished book in multiple formats and share it with the world",
  },
];
