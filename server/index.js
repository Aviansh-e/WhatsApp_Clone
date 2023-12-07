import express from "express";
import Mongoose from "./database/db.js";
import cors from 'cors';
import bodyParser from "body-parser";
//now its routing time
import Routes from './routes/route.js'

const app = express();


app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); //mtlb remove redundant spaces and prevent to add redundant word;

app.use('/', Routes);

Mongoose();


app.get('/', (req, res) => {
    res.send('hellow how are you');
})

const PORT = 8000;
app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));