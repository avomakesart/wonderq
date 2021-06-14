import { Response, Request, NextFunction } from 'express';

export type Context = {
  res: Response;
  req: Request;
  next: NextFunction;
  err: any;
};
