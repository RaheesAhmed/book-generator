export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  genre: string;
  coverImage?: string;
  status: "draft" | "generating" | "completed" | "failed";
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  bookId: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface GenerationSettings {
  genre: string;
  style: string;
  tone: string;
  length: "short" | "medium" | "long";
  targetAudience: string;
  additionalNotes?: string;
}

export type NotificationType = "success" | "error" | "info" | "warning";

export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  title?: string;
  duration?: number;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
  status: number;
}
