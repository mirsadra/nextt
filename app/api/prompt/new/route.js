// This is how an API route in next.js looks like
import { connectToDB } from "@utils/database";  // we'll need this to connect to the database
import Prompt from "@models/prompt";

export const POST = async (req) => {
    // first we want to grab things we've passed through the post request. In other words, extract the data. 
    const { userId, prompt, tag } = await req.json(); 
// we connect to the DB. We use it everytime because this is a Lambda function, meaning it's going to die once it's done.
    try {
        await connectToDB();  // connect to the database and then create a new prompt
        const newPrompt = new Prompt({ creator: userId, prompt, tag })
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })  // we create newPromt and then we return it as a response
    } catch (error) {
        return new Response("Failed to create a new prompt.", { status: 500 })  // status 500 means server error
    }
}