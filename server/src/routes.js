import { Router } from 'express';
import UserController from './app/controllers/UserController';
import CampaignController from './app/controllers/CampaignController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import ProviderController from './app/controllers/ProviderController';

// import multer from 'multer';
// import multerConfig from './config/multer';

const routes = new Router();
// const upload = multer(multerConfig);
// para upload de arquivos.

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.get('/providers', ProviderController.index);
routes.post('/campaign', CampaignController.store);
// routes.post('/files', upload.single('file'), FileController.store);
// para upload de arquivos.

export default routes;
