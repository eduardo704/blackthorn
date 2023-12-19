import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import {
    NotificationSender
} from './sender/notification.sender';
import { EmailService } from './services/email.service';
import { MessageSenderFactory } from './services/factories/messageSenderFactory';
import { SmsService } from './services/sms.service';

@Module({
  controllers: [NotificationsController],
  providers: [
    SmsService,
    NotificationSender,
    EmailService,
    MessageSenderFactory,
  ],
})
export class NotificationsModule {}
