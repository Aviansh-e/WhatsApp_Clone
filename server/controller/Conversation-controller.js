import Conversation from "../model/Conversation.js";

export const newConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } });
        if (exist) {
            return response.status(200).json('Conversation already exist');
        }
        const newConversation = new Conversation({
            members: [senderId, receiverId]
        })
        await newConversation.save();
        return response.status(200).json('conversation saved successfully');
    }
    catch (err) {
        return response.status(500).json(err.message);
    }
}
export const getConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
        let converstion = await Conversation.findOne({ members: { $all: [receiverId, senderId] } });
        return response.status(200).json(converstion);
    } catch (err) {
        return response.status(500).json(err.message);

    }
}
