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
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*", );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api/items', items)

mongoose
        .connect(db)
        .then( () => console.log('Mongo connected'))
        .catch( err => console.log(err));




//app.listen(port , () => console.log(`server started on port ${port}`));


app.listen(port, host, () => {
    console.log(`server listening at ${host}:${port} `);
});