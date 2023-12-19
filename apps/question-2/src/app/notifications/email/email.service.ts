import { Injectable } from '@nestjs/common';
import { MessageSender } from '../sender/messageSender';

@Injectable()
export class EmailService {
  sendEmail(message: string, recipient: string) {}
}

@Injectable()
export class GoodEmailService implements MessageSender {
  sendMessage(message: string, recipient: string): boolean {
    console.log('emailService',message, recipient);
    return true;
  }
}
