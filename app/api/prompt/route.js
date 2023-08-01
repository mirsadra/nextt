// I'm creating it after finishing the "Feed.jsx" file.

import { connectToDB } from "@utils/database";  // we'll need this to connect to the database
import Prompt from "@models/prompt";

export const GET = async (request) => {
    try {
        await connectToDB();  // connect to the database 

        const prompts = await Prompt.find({}).populate("creator")

        return new Response(JSON.stringify(prompts), { status: 200 }) 
    } catch (error) {
        return new Response("Failed to fetch all prompts.", { status: 500 })
    }
}