export type PostItem = {
  reviewId?: number;
  commentId?: number;
  content: string;
  createdAt: string;
  likeCount: number;
  commentCount?: number;
  item?: {
    complexId?: number;
    propertyId?: number;
    articleName: string;
  };
  review?: {
    reviewId: number;
    content: string;
    item: {
      complexId?: number;
      propertyId?: number;
      articleName: string;
    };
  };
};
