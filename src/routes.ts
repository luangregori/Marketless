import * as express from 'express';
import TesteController from './controllers/testeController';

const router = express.Router();

const testeController = new TesteController();
const contextPath = process.env.CONTEXT_PATH_ENV;

// Status do backend
router.get(`${contextPath}/healthcheck`, (req, res) => {
  return res.status(200).json({ status: 'UP' });
});

router.get(
  `${contextPath}/teste`, 
  testeController.getRandomUser.bind(testeController)
);

export = router;