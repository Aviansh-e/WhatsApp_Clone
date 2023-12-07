import Messages from "../model/Message.js";
import Conversation from "../model/Conversation.js";

export const NewMessage = async (request, response) => {
    try {
        const newMessage = new Messages(request.body);
        // console.log(newMessage);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
        return response.status(200).json('message has been deliverd successfully');
    } catch (err) {
        return response.status(500).json(err.message);
    }
}
export const getMessage = async (request, response) => {
    try {
        const message = await Messages.find({ conversationId: request.params.id });
        // console.log("message fetched successfully");
        // console.log(message);
        return response.status(200).json(message);
    } catch (err) {
        return response.status(500).json(err.message);
    }
}
