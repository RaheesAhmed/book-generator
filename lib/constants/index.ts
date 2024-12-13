export const SITE_CONFIG = {
  name: "AI Book Creator",
  description: "Create beautiful books with AI assistance",
  url: process.env.NEXTAUTH_URL || "http://localhost:3000",
  ogImage: "https://your-domain.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
  },
};

export const BOOK_GENRES = [
  "Fiction",
  "Non-Fiction",
  "Science Fiction",
  "Fantasy",
  "Mystery",
  "Romance",
  "Thriller",
  "Horror",
  "Historical Fiction",
  "Biography",
  "Self-Help",
  "Children's",
] as const;

export const WRITING_STYLES = [
  "Descriptive",
  "Narrative",
  "Expository",
  "Persuasive",
  "Creative",
  "Technical",
  "Conversational",
  "Formal",
] as const;

export const WRITING_TONES = [
  "Professional",
  "Casual",
  "Humorous",
  "Serious",
  "Inspirational",
  "Educational",
  "Dramatic",
  "Objective",
] as const;

export const TARGET_AUDIENCES = [
  "Children (Ages 5-12)",
  "Young Adults (Ages 13-17)",
  "Adults (Ages 18+)",
  "Professionals",
  "Academic",
  "General Audience",
] as const;

export const BOOK_LENGTH_OPTIONS = {
  short: {
    label: "Short",
    chapters: "5-10",
    words: "20,000-40,000",
  },
  medium: {
    label: "Medium",
    chapters: "10-20",
    words: "40,000-80,000",
  },
  long: {
    label: "Long",
    chapters: "20+",
    words: "80,000+",
  },
} as const;

export const API_ROUTES = {
  auth: {
    signIn: "/api/auth/signin",
    signUp: "/api/auth/signup",
    signOut: "/api/auth/signout",
  },
  books: {
    create: "/api/books",
    list: "/api/books",
    get: (id: string) => `/api/books/${id}`,
    update: (id: string) => `/api/books/${id}`,
    delete: (id: string) => `/api/books/${id}`,
  },
  chapters: {
    create: (bookId: string) => `/api/books/${bookId}/chapters`,
    list: (bookId: string) => `/api/books/${bookId}/chapters`,
    get: (bookId: string, chapterId: string) =>
      `/api/books/${bookId}/chapters/${chapterId}`,
    update: (bookId: string, chapterId: string) =>
      `/api/books/${bookId}/chapters/${chapterId}`,
    delete: (bookId: string, chapterId: string) =>
      `/api/books/${bookId}/chapters/${chapterId}`,
  },
} as const;
