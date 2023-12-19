import { Injectable } from '@nestjs/common';
import { GoodEmailService } from '../email/email.service';
import { Channel } from '../model/channel';
import { MessageSender } from '../sender/messageSender';
import { GoodSmsService } from '../sms/sms.service';

@Injectable()
export class MessageSenderFactory {
  constructor(
    private goodEmailService: GoodEmailService,
    private goodSmsService: GoodSmsService
  ) {}

  public Create(channel: Channel): MessageSender {
    if (channel === 'email') {
      return this.goodEmailService;
    }
    if (channel === 'sms') {
      return this.goodSmsService;
    }
  }
}
