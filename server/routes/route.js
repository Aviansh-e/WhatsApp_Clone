import express from "express";
const route = express.Router();
import { newConversation, getConversation } from "../controller/Conversation-controller.js";

import { AddUSer, getUsers } from "../controller/USer-Controller.js";
import { NewMessage, getMessage } from "../controller/Message-Controller.js";

route.post('/add', AddUSer);
route.get('/users', getUsers);


route.post('/Convocersion/add', newConversation);
route.post('/Convocersion/get', getConversation);


route.post('/message/add', NewMessage);
route.get('/message/get/:id', getMessage);


export default route;