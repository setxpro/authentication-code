import express from 'express';
import bodyParse from 'body-parser';
import cors from 'cors';
import hashRouter from '../controllers/HashCodeControllers';
import { schedule } from '../services/HashCodeService';
import cron from 'node-cron'

const server = express();

server.use(cors({
   origin: "*"
}));



server.use(bodyParse.json({limit: '50mb'}));
server.use(bodyParse.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));

server.use("/api", hashRouter)

// Inválid router
server.use((req:any, res:any) => {
   return res.status(404).json({message: "not found."})
})

cron.schedule('* * * * *', async () => await schedule());

export default server;