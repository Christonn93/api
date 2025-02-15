import { User, users } from "./models/user/user.model";
import { comments } from "./models/socialMedia/comments.model";
import { vehicles } from "./models/vehicleStore/vehicle.model";

export const findUser = (username: string, password: string): User | undefined => {
 return users.find((u) => u.email === username && u.password === password);
};

export const addUser = (newUser: User): void => {
 users.push(newUser);
};

export class AuthService {
 static async login(username: string, password: string) {
  // Check user credentials (simplified here)
  const user = findUser(username, password);
  if (!user) {
   throw new Error("Invalid credentials");
  }
  return `token-for-${username}`;
 }

 static async register(username: string, password: string, firstName: string, lastName: string, age: number) {
  const newUser: User = {
   email: username,
   password,
   userId: Date.now().toString(),
   firstName,
   lastName,
   age,
   dateOfRegistration: new Date(),
  };
  addUser(newUser);
  return newUser;
 }
}

export class CommentService {
 static async createComment(postId: string, comment: string) {
  const newComment = { id: Date.now().toString(), postId, comment };
  comments.push(newComment);
  return newComment;
 }
}

export class VehicleService {
 static async addVehicle(make: string, model: string, year: number) {
  const newVehicle = { id: Date.now().toString(), make, model, year };
  vehicles.push(newVehicle);
  return newVehicle;
 }
}
