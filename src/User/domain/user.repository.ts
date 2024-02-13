import { UserEntity } from "./user"



export interface UserRepository {
    findAllUsers(): Promise<UserEntity[] | []>;
    findOneById(id: string): Promise<UserEntity | null>;
    findOneByEmail(email: string): Promise<UserEntity | null>;
    createNew(user: UserEntity): Promise<UserEntity>;
    deleteOne(id: string): Promise<UserEntity | null>;
}