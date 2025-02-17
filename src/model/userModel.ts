import prisma from "../config/db";

interface CreateUserData {
 email: string;
 password: string;
 username: string;
 firstName: string;
 lastName: string;
}

interface User {
 username: any;
 firstName: any;
 lastName: any;
 age: any;
 location: any;
 role: any;
 work: any;
 contactInfo: any;
 id: string;
 email: string;
 password: string;
}

export const createUser = async (data: CreateUserData): Promise<User> => {
 const { email, password, username, firstName, lastName } = data;
 const user = await prisma.user.create({
  data: {
   email,
   password,
   username,
   firstName,
   lastName,
  },
 });
 return user;
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
 const user = await prisma.user.findUnique({
  where: { email },
 });
 return user;
};

export const updateUserDetails = async (userId: string, updates: { age?: number; location?: string; role?: string; work?: string; contactInfo?: string }) => {
 return prisma.user.update({
  where: { id: userId },
  data: updates,
 });
};
