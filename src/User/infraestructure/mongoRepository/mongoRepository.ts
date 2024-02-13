import { Execptions } from "../../application/user.exeptions";
import { UserEntity } from "../../domain/user";
import { UserRepository } from "../../domain/user.repository";
import { UserModel } from "./userModel.mongo";




export class MongoRepository implements UserRepository {



    async findAllUsers(): Promise<UserEntity[]> {
        try {
            const users = await UserModel.find();
            return users;
        } catch (error) {
            throw error;
        }
    }

    async findOneById(id: string): Promise<UserEntity | null> {
        try {
            const user = await UserModel.findOne({ id: id })
            return user;
        } catch (error) {
            throw error;
        }
    }

    async findOneByEmail(email: string): Promise<UserEntity | null> {
        try {
            const user = await UserModel.findOne({ email });
            return user;
        } catch (error) {
            throw error;
        }
    }


    async createNew(user: UserEntity): Promise<UserEntity> {
        try {
            const newUser = await UserModel.create(user);
            return newUser;
        } catch (error) {
            throw error;
        }
    }

    async deleteOne(id: string): Promise<UserEntity | null> {
        try {
            const user = await UserModel.findOne({ id });
            if (!user) {
                throw new Execptions(`No existe un registro con id ${id}`, 404);
            }
            await user.deleteOne();
            return user;
        } catch (error: Execptions | any) {
            throw error;
        }
    }

}