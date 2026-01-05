import { currentUser } from "@clerk/nextjs/server"
import connectDB from "./mongodb"
import User from "../models/User"

export const getUserRole = async () => {
    const clerkUser = await currentUser()
    
    if (!clerkUser) return null
    await connectDB()
    const dbUser = await User.findOne({ clerkId: clerkUser.id}).lean()               
    return dbUser?.role ?? null
}
export const getCurrentUserWithRole = async () => {
    const user = await currentUser();
    if(!user) return null;
    const role = await getUserRole();
    return {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
        role:role,
    }
}