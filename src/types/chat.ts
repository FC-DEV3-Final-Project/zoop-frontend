export interface ChatPreviewItem {
  order?: number;
  chatRoomId: number;
  title: string;
  content?: string;
  lastMatchingMessage?: string;
  lastMessageAt?: string;
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
