import { Comment } from "./comments.model";

export interface Blog {
 id: string;
 userId: string;
 title: string;
 content: string;
 coverImage: string;
 tags: Array<string>;
 likes: number;
 comments: Array<Comment>;
 views: number;
 status: string;
 featured: boolean;
 estimatedReadTime: number;
 createdAt: Date;
 updatedAt: Date;
}
