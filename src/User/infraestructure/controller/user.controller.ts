import { Request, Response } from "express";
import { UserUseCases } from "../../application/user.useCases";
import { UserEntity } from "../../domain/user";
import { Execptions } from "../../application/user.exeptions";
import { escribirLogs } from "../logs/logs";






export class UserController {

    constructor(
        private readonly userUseCases: UserUseCases
    ) { }

    private static handlerHttpError(res: Response, error: any) {
        console.log(`[ ${new Date()} ] -> status(${error.code || 500}) ${error}`);
        escribirLogs(`[ ${new Date()} ] -> status(${error.code || 500}) ${error}`);
        res.status(error.code || 400).json({ success: false, error: error.message });
    }

    async createNewUser(req: Request, res: Response) {
        try {
            const user = await this.userUseCases.createNewUser(req.body);
            return res.json({
                success: true,
                message: 'Creado correctamente',
                data: user
            });
        } catch (error: Execptions | any) {
            UserController.handlerHttpError(res, error);
        }
    }


    async findAllUsers(req: Request, res: Response) {
        try {
            const userList: UserEntity[] = await this.userUseCases.findAll();
            return res.json({
                success: true,
                message: 'Creado correctamente',
                data: userList
            });
        } catch (error: Execptions | any) {
            UserController.handlerHttpError(res, error)
        }
    }


    async findById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await this.userUseCases.findById(id);
            return res.json({
                success: true,
                message: 'Creado correctamente',
                user
            });
        } catch (error: Execptions | any) {
            UserController.handlerHttpError(res, error);
        }
    }


    async deleteOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const userDel = await this.userUseCases.deleteOne(id);
            return res.json({
                success: true,
                message: 'Registro eliminado con exito',
                userDel
            })
        } catch (error) {
            UserController.handlerHttpError(res, error);
        }
    }

}