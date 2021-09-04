import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    username: string;
    password: string;
}

const userSchema = new Schema(
    {
        username: {
            type: String,
        },
        password: {
            type: String,
        },
    },
    { timestamps: true }
);

export default model<IUser>('User', userSchema);
