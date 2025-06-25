import { MapPropertyItem } from "./map";

export interface ChatPreviewItem {
  chatRoomId: number;
  title: string;
  lastMatchingMessage: string | null;
  lastMessageAt?: string;
}

export interface ChatItem {
  chatRoomId: number;
  title: string;
  messages: Message[];
}

export interface Message {
  messageId: number;
  senderType: "CHATBOT" | "USER";
  content: string;
  createdAt: string;
  properties?: MapPropertyItem[];
}

export interface AIResponse {
  chatRoomId: number;
  messageId: number;
  content: string;
  senderType: "CHATBOT" | "USER";
  properties?: MapPropertyItem[];
  createdAt: string;
}
