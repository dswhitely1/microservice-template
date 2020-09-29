import express from 'express';
import helpers from './helpers';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import routes from './route';

const app = express();

helpers.applyMiddleware(middleware, app);
helpers.applyRoutes(routes, app);
helpers.applyMiddleware(errorHandlers, app);

export default app;
