export interface QueueMessage {
  id: string;
  data: any;
  processingAt?: Date;
}

export const messagesOnQueue: QueueMessage[] = [];
export const messagesInProcess: QueueMessage[] = [];
