import { UserType } from "./modelTypes";

export interface DataFromAuthentication {
  status: string;
  token: string;
  user: UserType;
}
