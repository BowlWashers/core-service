export interface IUser {
  readonly id: number;
  readonly email: string;
  readonly password?: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date;
}
