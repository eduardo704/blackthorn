import { Injectable } from '@nestjs/common';
import { MessageSender } from '../sender/messageSender';

@Injectable()
export class SmsService {
    sendSMS(message, recipient){}

}


@Injectable()
export class GoodSmsService implements MessageSender {
  sendMessage(message: string, recipient: string): boolean {
    console.log('smsService', message, recipient);
    return true;
  }
}
