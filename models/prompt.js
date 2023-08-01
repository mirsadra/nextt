import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    creator: {  // creator of the prompt
        type: Schema.Types.ObjectId,  // creator is an object id document in the database
        ref: 'User',  // refrence will be the user so it's going to be a one-to-many relationship. One user can create many prompts
    },
    prompt: {
        type: String,
        required: [true, 'Please provide a prompt.'],
    },
    tag: {
        type: String,
        required: [true, 'Please provide a tag.'],
    }
});

// 
const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;