export interface Booking {
 id: string;
 userId: string;
 service: string;
 serviceId: string;
 providerId: string;
 date: Date;
 status: string;
 price: number;
 currency: string;
 paymentStatus: string;
 paymentMethod: string;
 duration: number;
 location: {
  latitude: number;
  longitude: number;
  address: string;
 };
 cancellationPolicy: string;
 customerNotes: string;
 createdAt: Date;
 updatedAt: Date;
}
