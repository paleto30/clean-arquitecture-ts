import { UserUseCases } from "../../application/user.useCases";
import { UserController } from "../controller/user.controller";
import { MongoRepository } from "../mongoRepository/mongoRepository";



export const getUserController = () => {
    const repository = new MongoRepository();
    const userUseCases = new UserUseCases(repository);
    const controller = new UserController(userUseCases);
    return  controller;
} 