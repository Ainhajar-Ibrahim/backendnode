import express, { json } from 'express';
import config from 'config';
import mongoose from 'mongoose';
import items from '../routes/api/items';



const port = config.get("port") as number;
const host = config.get("host") as string;
const db= config.get("dbUri") as string;

const app= express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/items', items)



mongoose
        .connect(db)
        .then( () => console.log('Mongo connected'))
        .catch( err => console.log(err));




//app.listen(port , () => console.log(`server started on port ${port}`));


app.listen(port, host, () => {
    console.log(`server listening at ${host}:${port} `);
});