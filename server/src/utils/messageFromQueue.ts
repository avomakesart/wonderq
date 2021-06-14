import { QueueMessage } from '.';

export function messageFromQueue(
  storage: QueueMessage[],
  messageId?: string,
  index?: number
) {
  index = index ?? storage.findIndex((message) => message.id === messageId);
  if (index === -1) {
    throw new Error('Message not found in this storage');
  }
  const message = storage[index];
  storage.splice(index, 1);
  return message;
}
