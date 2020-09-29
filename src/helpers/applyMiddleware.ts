import { Router } from 'express';

type Wrapper = (router: Router) => void; // eslint-disable-line no-unused-vars

const applyMiddleware = (middleware: Wrapper[], router: Router) => {
  middleware.forEach((f) => f(router));
};

export default applyMiddleware;
