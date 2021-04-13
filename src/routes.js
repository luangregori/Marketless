import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

const contextPath = process.env.CONTEXT_PATH_ENV;

// Status do backend
routes.get('/healthcheck', (req, res) => {
  return res.status(200).json({ status: 'UP' });
});

routes.post( `${contextPath}/users`, UserController.store.bind(UserController));

routes.post( `${contextPath}/login`, SessionController.store.bind(SessionController));

// Autenticação
routes.use(authMiddleware);

routes.put( `${contextPath}/users`, UserController.update.bind(UserController));

export default routes;
