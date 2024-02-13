import mongoose from "mongoose";
import { UserEntity } from "../../domain/user";




const schemaUser = new mongoose.Schema<UserEntity>(
    {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        pass: {
            type: String,
            required: true
        },
        rol: {
            type: Number,
            required: true
        }
    },
    {
        _id: true,
        timestamps: false,
        versionKey: false
    }
);



const UserModel = mongoose.model<UserEntity>('users', schemaUser);

export { UserModel };