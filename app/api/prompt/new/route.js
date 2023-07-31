import { connectToDB } from "@utils/database";  // we'll need this to connect to the database


export const POST = async (req) => {
    // first we want to grab things we've passed through the post request
    const { userId, prompt, tag } = await req.json(); 

    try {
        await connectToDB();  // connect to the database and then create a new prompt
    } catch (error) {
}