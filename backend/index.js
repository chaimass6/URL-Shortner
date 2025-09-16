import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';

dotenv.config()


const app = express();
app.use (cors());
app.use (express.json());


mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log('DB Connection Error: ', err));
app.listen(5000, () => console.log('Server running on port 5000'));

