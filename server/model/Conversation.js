import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    }
},
    {
        timestamps: true
    }
);

const Conversation = mongoose.model('Conversations', ConversationSchema);
export default Conversation;


