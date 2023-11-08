export interface IUser {
  _id: number;
  name: string;
  email: string;
  account: string;
  Roles: string[];
  deleted: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface ICredential {
  token: string;
}
