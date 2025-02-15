export interface Post {
 id: string;
 userId: string;
 content: string;
 likes: number;
 dislikes: number;
 comments: string[];
}
export const posts: Post[] = [];
