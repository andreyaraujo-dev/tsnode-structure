import { Router } from 'express';

import HomeControler from './app/controllers/HomeController';

const routes = Router();

routes.get('/', HomeControler.index);

export default routes;
