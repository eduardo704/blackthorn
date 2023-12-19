import { Injectable } from '@nestjs/common';
import { MessageSender } from './messageSender.abstract';

@Injectable()
export class SmsService implements MessageSender {
  sendMessage(message: string, recipient: string): boolean {
    console.log('smsService', message, recipient);
    return true;
  }
}
