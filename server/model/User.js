import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    iss: {
        type: String
    },
    nbf: {
        type: String
    },
    aud: {
        type: String
    },
    sub: {
        type: String,
        require: true
    },
    email: {
        type: String
    },
    mail_verified: {
        type: Boolean
    },
    azp: {
        type: String
    },
    name: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        require: true
    },
    given_name: {
        type: String
    },
    iat: {
        type: String
    },
    family_name: {
        type: String
    },
    exp: {
        type: String
    },
    jti: {
        type: String
    }
});

const user = mongoose.model('whatappuserdata', userSchema);
export default user;


