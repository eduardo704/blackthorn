import { Controller, Post } from '@nestjs/common';
import { GoodNotificationSender } from './sender/notification.sender';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly goodNotificationSender: GoodNotificationSender) {}

  @Post('email')
  sendEmail() {
    this.goodNotificationSender.sendNotification('email message', 'eduardo704@gmail.com', 'email');
    return 'message sent to email';
  }

  @Post('sms')
  sendSms() {
    this.goodNotificationSender.sendNotification('text messsage', '+551194554545', 'sms');
    return 'message sent to sms';
  }
}
