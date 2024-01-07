import {Router} from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/users.controllers.js';
import { verificarApiKey } from '../verificationApiKey.js';

const router = Router();

router.get('/users', verificarApiKey, getUsers);

router.get('/users/:id', verificarApiKey, getUser);

router.post('/users', verificarApiKey, createUser);

router.patch('/users/:id', verificarApiKey, updateUser);

router.delete('/users/:id', verificarApiKey, deleteUser);

export default router;