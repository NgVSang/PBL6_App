export interface IUser {
  _id: string;
  name: string;
  email: string;
  account: {
    _id: string;
    userName: string;
    email: string;
  };
  Roles: IRole[];
  gender: boolean;
  deleted: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v: 1;
  Address: string;
  dayOfBirth: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  profilePicture?: string;
  isActive: 'ACTIVE' | 'ACCEPTED';
}

export interface IRole {
  _id: '651ebd7c8e8d796dfaf996b2';
  roleName: 'User' | 'superUser' | 'Seller';
}

export interface ICredential {
  token: string;
}
