namespace InteractiveComments {
  export type User = {
    username: string;
    image: {
      png: string;
      webp: string;
    };
  };

  export type Comment = {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replies: Reply[];
  };

  export type Reply = Comment & {
    replyingTo: string;
  };

  export type Data = {
    currentUser: User;
    comments: Comment[];
  };

  export type ReplyEvent = {
    content: string;
  };
}
