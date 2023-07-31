export const POST = async (req) => {
    // first we want to grab things we've passed through the post request
    const { userId, prompt, tag } = await req.json(); 
}