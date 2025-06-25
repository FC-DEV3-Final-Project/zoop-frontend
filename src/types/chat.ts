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

export interface Property {
  order: number;
  propertyId: number;
  tradeTypeName: string;
  rentPrice: number;
  warrantPrice: number;
  dealPrice: number;
  dealOrWarrantPrc: string;
  tagList: string[];
  articleName: string;
  realEstateTypeName: string;
  netArea: number;
  imageUrl: string | null;
}

export interface Message {
  messageId: number;
  senderType: "CHATBOT" | "USER";
  content: string;
  createdAt: string;
  properties?: Property[];
}

// AI 응답 타입
export interface AIResponse {
  chatRoomId: number;
  messageId: number;
  content: string;
  senderType: "CHATBOT" | "USER";
  properties?: Property[];
  createdAt: string;
}
