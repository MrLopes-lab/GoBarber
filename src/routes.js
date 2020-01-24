import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import SchedulesController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store); // Criar um usuario
routes.post('/sessions', SessionController.store); // Criar uma sessão

routes.use(authMiddleware); // a autenticação valerá para todas as rotas abaixo

routes.put('/users', UserController.update); // Alteração em usuario

routes.get('/providers', ProviderController.index); // Mostra todos os prestadores de serviço

routes.get('/appointments', AppointmentController.index); // Lista todos os agendamentos
routes.post('/appointments', AppointmentController.store); // Agendamento de serviço

routes.get('/schedule', SchedulesController.index);

routes.get('/notifications', NotificationController.index);

routes.post('/files', upload.single('file'), FileController.store); // Upload foto user

export default routes;
