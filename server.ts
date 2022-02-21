import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { Request, Response } from 'express';
import userRouter from './routes/userRoute';

import connectDB from './db';

dotenv.config();
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1', userRouter);

const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});

const start = async (): Promise<void> => {
  try {
    await connectDB(process.env.MONGO_URI!)
      .then(() => console.log('Successfull connect to DB'))
      .catch((err) => console.log(err));
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
