import { v4 as uuid } from 'uuid';

import {
  messageFromQueue,
  messageProcessing,
  messagesInProcess,
  messagesOnQueue,
} from '../utils';

const MESSAGE_TIMEOUT = 10000;

/**
 * @desc Create a message object with an id and data
 * @param using custom function
 * @access Public
 **/
const createMessage = (message: any) => {
  const messageInfo = {
    id: uuid(),
    data: message,
  };

  messagesOnQueue.push(messageInfo);
  return messageInfo.id;
};

/**
 * @desc Get a message from the queue
 * @param using a custom function
 * @access Public
 **/
const getMessage = () => {
  if (messagesOnQueue.length === 0) return;
  const message = messageFromQueue(messagesOnQueue, undefined, 0);

  if (message) {
    message.processingAt = new Date();
    messagesInProcess.push(message);
    setTimeout(() => messageProcessing(message.id), MESSAGE_TIMEOUT);
    return message;
  }

  return;
};

/**
 * @desc Post an status that the message has been processed
 * @param using a custom function
 * @access Public
 **/
const processMessage = (id: string) => {
  try {
    messageFromQueue(messagesInProcess, id);
  } catch {
    throw new Error(
      'The requested message is not available for processing, it was probably moved back to the queue due to processing timeout'
    );
  }
};

export { createMessage, processMessage, getMessage };
