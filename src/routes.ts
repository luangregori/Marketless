import * as express from 'express';
import TesteController from './controllers/testeController';

// const validator = require('../validators/validator');

const router = express.Router();

const testeController = new TesteController();
const contextPath = process.env.CONTEXT_PATH_ENV;

router.get(
  `${contextPath}/teste`, 
  testeController.getRandomUser.bind(testeController)
);

export = router;