import { Router } from "express";
import { userRouter } from '../src/User/infraestructure/routes/index';

const router = Router();


router.use('/users', userRouter)



export default router;