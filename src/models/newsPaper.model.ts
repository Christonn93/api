export interface Newspaper {
 id: string;
 userId: string;
 title: string;
 content: string;
 publishedAt: Date;
 category: string;
 tags: string[];
 status: string;
 likes: number;
 comments: Array<Comment>;
 views: number;
 editorApproved: boolean;
 featured: boolean;
 createdAt: Date;
 updatedAt: Date;
}
