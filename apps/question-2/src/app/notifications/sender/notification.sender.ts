import { Injectable } from '@nestjs/common';
import { Channel } from '../model/channel';
import { MessageSenderFactory } from '../services/factories/messageSenderFactory';

// @Injectable()
// export class NotificationSender {
//   emailService: EmailService;
//   smsService: SmsService;

//   constructor() {
//     this.emailService = new EmailService();
//     this.smsService = new SmsService();
//   }

//   public sendNotification(message: string, recipient: string, channel: string) {
//     if (channel === 'email') {
//       this.emailService.sendEmail(message, recipient);
//     } else if (channel === 'sms') {
//       this.smsService.sendSMS(message, recipient);
//     }
//   }
// }

@Injectable()
export class NotificationSender {
  constructor(private messageSenderFactory: MessageSenderFactory) {}

  public sendNotification(
    message: string,
    recipient: string,
    channel: Channel
  ) {
    const messenger = this.messageSenderFactory.Get(channel);
    messenger.sendMessage(message, recipient);
  }
}
