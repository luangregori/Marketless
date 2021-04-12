import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

const contextPath = process.env.CONTEXT_PATH_ENV;

routes.post( `${contextPath}/users`, UserController.store);

routes.post( `${contextPath}/login`, SessionController.store);

// Autenticação
routes.use(authMiddleware);

routes.put( `${contextPath}/users`, UserController.update);

export default routes;
