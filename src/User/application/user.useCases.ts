import { UserEntity } from "../domain/user";
import { UserRepository } from "../domain/user.repository";
import { Execptions } from "./user.exeptions";





export class UserUseCases {

    constructor(
        private readonly userRepository: UserRepository
    ) { }


    async createNewUser(user: UserEntity): Promise<UserEntity> {
        try {
            const { name, email, pass, rol } = user;
            const userEntity = new UserEntity(name, email, pass, rol);
            const exist = await this.userRepository.findOneByEmail(email);
            if (exist)
                throw new Execptions('El correo no esta disponible.', 409);
            const newUser = await this.userRepository.createNew(userEntity);
            return newUser;
        } catch (error: Execptions | any) {
            throw error;
        }
    }


    async findAll(): Promise<UserEntity[]> {
        try {
            const userList = await this.userRepository.findAllUsers();
            return userList;
        } catch (error: Execptions | any) {
            throw error;
        }
    }


    async findById(id: string): Promise<UserEntity | null> {
        try {
            const user = await this.userRepository.findOneById(id);
            if (!user)
                throw new Execptions('Registro no encontrado.', 404);
            return user;
        } catch (error) {
            throw error;
        }
    }


    async deleteOne(id: string) {
        try {
            const del = await this.userRepository.deleteOne(id);
            return del;
        } catch (error) {
            throw error;
        }
    }


}