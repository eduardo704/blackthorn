import { Injectable } from '@nestjs/common';
import { MessageSender } from './messageSender.abstract';



@Injectable()
export class EmailService implements MessageSender {
  sendMessage(message: string, recipient: string): boolean {
    console.log('emailService',message, recipient);
    return true;
  }
}
