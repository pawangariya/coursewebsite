import mongoose, {Document, Model, Schema} from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    email: string;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
    role: 'admin' | 'student'
    createdAt: Date;
    updatedAt: Date;
}
const UserSchema: Schema<IUser> = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    imageUrl:{
        type: String,
    },
    role: {
        type: String,
        enum: ['admin','student'],
        default: 'student',
        required: true,
    }
}, {
    timestamps: true,
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;