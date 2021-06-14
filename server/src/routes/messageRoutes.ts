import { Router } from 'express';
import {
  getMessages,
  processingMessage,
  postMessage,
} from '../controllers/messageController';

const router = Router();

router.route('/').get(getMessages);
router.route('/post').post(postMessage);
router.route('/process').post(processingMessage);

export default router;
