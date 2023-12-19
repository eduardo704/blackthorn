import { Controller, Post } from '@nestjs/common';
import { NotificationSender } from './sender/notification.sender';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationSender: NotificationSender) {}

  @Post('email')
  sendEmail() {
    this.notificationSender.sendNotification('email message', 'eduardo704@gmail.com', 'email');
    return 'message sent to email';
  }

  @Post('sms')
  sendSms() {
    this.notificationSender.sendNotification('text messsage', '+551194554545', 'sms');
    return 'message sent to sms';
  }
}
