import router from './routes/routes.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: '../.env' });

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(router);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => { console.log(`Servidor iniciado em: ${PORT}`) });