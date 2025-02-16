export interface User {
 id: string;
 name: string;
 email: string;
 passwordHash: string;
 role: string;
 profilePicture?: string;
 phoneNumber?: string;
 address?: {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
 };
 bio?: string;
 dateOfBirth?: Date;
 preferences?: {
  language: string;
  darkMode: boolean;
  notificationsEnabled: boolean;
 };
 other?: {
  status: string;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
 };
}

export const users: User[] = [];
