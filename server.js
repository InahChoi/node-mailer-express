import express from 'express';
import dotenv from 'dotenv';
import { mail } from './src/controller/index'

const app = express();
dotenv.config();
const { PORT } = process.env;

// express application
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/send', mail);

app.listen(PORT, () => console.log(`Server listening on port ${PORT} 🚀`));

export default app;