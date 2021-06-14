import { Context } from '../types';

const notFound = ({ req, res, next }: Context) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = ({ err, res, next }: Context) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
  });
  next();
};

export { notFound, errorHandler };
