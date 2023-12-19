import {  Injectable } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { MessageSenderFactory } from '../factories/messageSenderFactory';
import { Channel } from '../model/channel';
import { SmsService } from '../sms/sms.service';

@Injectable()
export class NotificationSender {
  emailService: EmailService;
  smsService: SmsService;

  constructor() {
    this.emailService = new EmailService();
    this.smsService = new SmsService();
  }

  public sendNotification(message: string, recipient: string, channel: string) {
    if (channel === 'email') {
      this.emailService.sendEmail(message, recipient);
    } else if (channel === 'sms') {
      this.smsService.sendSMS(message, recipient);
    }
  }
}

@Injectable()
export class GoodNotificationSender {
  constructor(private messageSenderFactory: MessageSenderFactory) {}

  public sendNotification(
    message: string,
    recipient: string,
    channel: Channel
  ) {
    const messenger = this.messageSenderFactory.Create(channel);
    messenger.sendMessage(message, recipient);
  }
}
