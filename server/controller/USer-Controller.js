
import user from "../model/User.js";

export const AddUSer = async (request, response) => {
    try {
        let exist = await user.findOne({ sub: request.body.sub });
        if (exist) {
            response.status(200).json({ msg: 'user already exist' });
            return;
        }
        const newUser = new user(request.body);
        await newUser.save();
        return response.status(200).json(newUser);
    }
    catch (err) {
        return response.status(500).json(err.message);
    }
}

export const getUsers = async (request, response) => {
    try {
        const users = await user.find({});
        return response.status(200).json(users);
        // console.log()

    } catch (err) {
        return response.status(500).json(err.message);
    }
}