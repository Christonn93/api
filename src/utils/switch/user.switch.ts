import { User } from "../../models/user.model";

export const filterUsers = (usersList: User[], filters: { id?: string; role?: string; name?: string }) => {
 const { id, role, name } = filters;

 switch (true) {
  case !!id:
   return usersList.filter((user) => user.id.toString() === id);

  case !!role:
   return usersList.filter((user) => user.role === role);

  case !!name:
   const nameLower = name.toString().toLowerCase();
   return usersList.filter((user) => user.name.toLowerCase().includes(nameLower));

  default:
   return usersList;
 }
};
