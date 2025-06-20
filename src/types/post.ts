export type PostData = {
  reviews: PostItemType[];
  comments: PostItemType[];
};

export type PostItemType = {
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

export type PostType = "review" | "comment";

export type PostItemProps = PostItemType & {
  type: PostType;
};
