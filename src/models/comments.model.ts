export interface Comment {
 id?: string;
 userId?: string;
 postId?: string;
 content?: string;
 likes?: number;
 replies?: [Comment];
 reported?: boolean;
 createdAt?: Date;
 updatedAt?: Date;
}
