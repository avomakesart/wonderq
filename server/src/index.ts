import colors from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import messageRoutes from './routes/messageRoutes';

import { errorHandler, notFound } from './middleware/errorMiddleware';

dotenv.config();

const main = async () => {
  const app = express();

  app.use(express.json());

  app.set('trust proxy', 1);
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
      credentials: false,
    })
  );

  app.use('/api/messages', messageRoutes)

  app.get('/', ({ res }) =>
    res?.status(200).json({
      greeting: 'Hey welcome to my wonder challenge',
      message:
        'Just a reminder, this server was created for my tech challenge',
      rules:
        'If you want to use it, just go to my repo and have a reference do not copied',
    })
  );

  app.use(notFound);
  app.use(errorHandler);

  const PORT = process.env.PORT || 7000;

  app.listen(PORT, () => {
    console.log(
      `Server started on http://localhost:${colors.yellow(PORT.toString())}`
    );
  });
};

main().catch((err) => console.log(err));
