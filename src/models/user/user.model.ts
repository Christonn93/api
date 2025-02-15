export interface User {
 email: string;
 password: string;
 userId: string;
 firstName: string;
 lastName: string;
 age: number;
 dateOfRegistration: Date;
}

export const users: User[] = [];
