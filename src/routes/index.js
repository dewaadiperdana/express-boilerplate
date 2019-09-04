import { Router } from 'express';
import IndexController from '@controllers/indexController';

const routes = Router();

routes.get('/', IndexController.home);

export default routes;