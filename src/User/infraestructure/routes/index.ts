import { Request, Response, Router } from "express";
import { getUserController } from "./injection";
const userController = getUserController()



const userRouter = Router();

// crear una entidad    
userRouter.post(
    '/',
    async (req: Request, res: Response) => await userController.createNewUser(req, res)
);

userRouter.get(
    '/',
    async (req: Request, res: Response) => await userController.findAllUsers(req, res)
);

userRouter.get(
    '/:id',
    async (req: Request, res: Response) => await userController.findById(req, res)
);

userRouter.delete(
    '/:id',
    async (req: Request, res: Response) => await userController.deleteOne(req, res)
)

export { userRouter };