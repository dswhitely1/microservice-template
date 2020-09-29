import {
  NextFunction, Request, Response, Router,
} from 'express';
import * as ErrorHandler from '../helpers/ErrorHandler';

const handle404Error = (router: Router) => {
  router.use(() => {
    ErrorHandler.notFoundError();
  });
};

const handleClientErrors = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.clientError(err, res, next);
  });
};

const handleServerErrors = (router: Router) => {
  router.use((err: Error, req: Request, res: Response) => {
    ErrorHandler.serverError(err, res);
  });
};

export default [handle404Error, handleClientErrors, handleServerErrors];
