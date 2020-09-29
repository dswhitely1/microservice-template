import { Response, NextFunction } from 'express';
import { HTTPClientError, HTTP404Error } from './httpErrors';

export const notFoundError = () => {
  throw new HTTP404Error('Method Not Found');
};

export const clientError = (err: Error, res: Response, next: NextFunction) => {
  if (err instanceof HTTPClientError) {
    console.warn(err.message);
    res.status(err.statusCode).json(err.message);
  } else {
    next(err);
  }
};

export const serverError = (err: Error, res: Response) => {
  if (process.env.NODE_ENV === 'production') {
    res.status(500).json('Internal Server Error');
  } else {
    console.error(err.stack);
    res.status(500).json(err.stack);
  }
};
