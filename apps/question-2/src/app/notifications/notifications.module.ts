import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { GoodSmsService, SmsService } from './sms/sms.service';
import {
  GoodNotificationSender,
  NotificationSender,
} from './sender/notification.sender';
import { EmailService, GoodEmailService } from './email/email.service';
import { MessageSenderFactory } from './factories/messageSenderFactory';

@Module({
  controllers: [NotificationsController],
  providers: [
    SmsService,
    GoodSmsService,
    NotificationSender,
    GoodNotificationSender,
    EmailService,
    GoodEmailService,
    MessageSenderFactory,
  ],
})
export class NotificationsModule {}
