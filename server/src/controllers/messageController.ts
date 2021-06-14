import { Request, Response } from 'express';
import { validate } from 'uuid';
import { Context } from '../types';
import {
  createMessage,
  getMessage,
  processMessage,
} from '../services/messageServices';

/**
 * @desc Create a message
 * @param POST /api/messages/post
 * @access Public
 **/
const postMessage = (req: Request, res: Response) => {
  const { messageData } = req.body;

  if (!messageData) {
    res.status(400);
    return res.end(
      'mmmhmm you should write some data in the message to proceed'
    );
  }
  const messageId = createMessage(messageData);
  return res.end(messageId);
};

/**
 * @desc Post a message
 * @param GET /api/messages
 * @access Public
 **/
const getMessages = ({ res }: Context) => {
  const message = getMessage();
  if (message) {
    return res.json(message);
  } else {
    res.status(400)
    return res.end('There are no messages available for processing');
  }
};

/**
 * @desc Get information from a message that has been processed
 * @param POST /api/messages/process
 * @access Public
 **/
const processingMessage = (req: Request, res: Response) => {
  const { messageId } = req.body;
  if (!messageId || !validate(messageId)) {
    res.status(400);
    return res.end(
      'The message id was not supplied or the id supplied is not valid'
    );
  }
  try {
    processMessage(messageId);
    res.json({ message: `The message id: ${messageId}, has been processed` });
    res.end();
  } catch (error) {
    res.status(400);
    res.end(error.message);
  }
};

export { postMessage, getMessages, processingMessage };
