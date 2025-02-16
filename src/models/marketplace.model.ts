export interface Marketplace {
 id: string;
 userId: string;
 title: string;
 description: string;
 category: string;
 price: number;
 currency: string;
 condition: string;
 status: string;
 images: string[];
 location: string;
 stockQuantity: number;
 sellerRating: number;
 views: number;
 wishlistCount: number;
 createdAt: Date;
 updatedAt: Date;
}
