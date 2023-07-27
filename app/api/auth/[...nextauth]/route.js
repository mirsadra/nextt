{/* within here, we can setup our providers such as google, facebook, etc. */}

import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import User from '@models/user';
import { connectToDB } from '@utils/database';

// console.log({
//     clientId: process.env.GOOGLE_ID,
    
// })

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {
        // to get the data from the user every single time to keep an existing and running session
        const sessionUser = await User.findOne({
            email: session.user.email 
        }) 
        // and we want to update his/her id
        session.user.id = sessionUser._id.toString();

        return session;
    },
    async signIn({ profile }) {
        try {
            // serverless -> lambda -> dynamodb
            await connectToDB();

            // check if a user is already in the database
            const userExist = await User.findOne({ email: profile.email });

            // if not, create a new user
            if (!userExist) {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", " ").toLowerCase(),
                    image: profile.picture,
                })
            }
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
})
 
export { handler as GET, handler as POST };