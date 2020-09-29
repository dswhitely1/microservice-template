import {
  NextFunction, Request, Response, Router,
} from 'express';

// eslint-disable-next-line no-unused-vars
type Handler = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;

type Route = {
    path: string
    method: string
    handler: Handler | Handler[]
}

const applyRoutes = (routes: Route[], router: Router) => {
  routes.forEach(({ path, method, handler }) => {
    (router as any)[method](path, handler);
  });
};

export default applyRoutes;
