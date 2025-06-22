export interface ChatPreviewItem {
  order?: number;
  chatRoomId: number;
  title: string;
  content?: string;
  lastMatchingMessage?: string | null;
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
