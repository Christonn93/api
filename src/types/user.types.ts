export interface User {
 id: string;
 name: string;
 email: string;
 posts: Post[];
}

export interface Post {
 id: number;
 content: string;
 likes: number;
 dislikes: number;
 comments: Comment[];
}

export interface Comment {
 id: number;
 content: string;
 likes: number;
 dislikes: number;
 replies: Comment[];
}
