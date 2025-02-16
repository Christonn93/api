export interface SocialMedia {
 id: string;
 userId: string;
 platform: string;
 username: string;
 followersCount: number;
 followingCount: number;
 postsCount: number;
 profileLink: string;
 bio: string;
 verified: boolean;
 engagementRate: number;
 createdAt: Date;
 updatedAt: Date;
}
