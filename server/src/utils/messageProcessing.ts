import { messagesInProcess, messagesOnQueue, messageFromQueue } from '.';

export function messageProcessing(id: string) {
  const message = messagesInProcess.find((message) => (message.id = id));
  if (message) {
    messageFromQueue(messagesInProcess, id);
    messagesOnQueue.push(message);
  }
}
