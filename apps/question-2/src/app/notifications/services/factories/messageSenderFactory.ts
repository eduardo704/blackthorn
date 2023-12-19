import { Injectable } from '@nestjs/common';
import { Channel } from '../../model/channel';
import { MessageSender } from '../messageSender.abstract';
import { EmailService } from '../email.service';
import { SmsService } from '../sms.service';

@Injectable()
export class MessageSenderFactory {
  constructor(
    private emailService: EmailService,
    private smsService: SmsService
  ) {}

  public Get(channel: Channel): MessageSender {
    if (channel === 'email') {
      return this.emailService;
    }
    if (channel === 'sms') {
      return this.smsService;
    }
  }
}
