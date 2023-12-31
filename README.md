# Eduardo Vargas - Blackthorn project

This project was generated using  [NX](https://nx.dev/)

To Run question 1: npm run start

To Run question 2: npm run start2

and do a post to  http://localhost:3000/api/notifications/sms or  http://localhost:3000/api/notifications/email

For this project there were two questions:


## Question 1

The First question was about setting a property in an Angular component called UserProfileComponent, from my experience the best way was to do it on init but there were instructions to replace Todos with code, so following that I did in a simple way getting into from a service:

```
export class UserProfileComponent implements OnInit {
  userName: string;
  // replacing todos
  constructor(private userProfileService: UserProfileService) {
    this.userName = this.userProfileService.getUsername();
  }

  // more real life example
  ngOnInit(): void {
    console.log(this.userName)
    // this.userProfileService.userName$
    //   .pipe(take(1))
    //   .subscribe((userName) => (this.userName = userName));
  }
}
```

## Question 2

Question 2 was a bit more interesting it was about dependency injection a topic I a really liked since I started working with Spring some years ago and now that I am more specialized in Angular a framework that heavily relies on DI integrated with Singletons.

The question was 'Please explain the Dependency Inversion Principle and why this code is violating it. How could this code be improved?'

So the code is violating the dependency injection principle by manually creating the services, the best way to do it is to 'inject' it. For that, there are many different approaches by different frameworks, in the Java world it is by defining beams, and in the ts(nest.js and angular) it is by defining that a class is injectable through a @Injectable annotation. This allows the system to determine which instance of the class will be injected instead of instantiating it in the constructor.

So I will try to say in my own words what is DI and why I think it is important instead of copying some definition from the internet. From my view DI is all about loosening the coupling between components, the main benefit is that if combine it with interfaces or abstract classes you can inject different implementations of these contracts without worrying to much about concrete implementation. For example you can inject something that will save it a cloud provider with DI you can inject something that has a save method but where it is actually saved it doesn't realy matter, making it easier to switch these if necessary. Another huge benefit in my view is for testing, it allows for predictable versions of these contracts to be injected for each test scenario you want making it very easy to mock depedencies. Also in my view, this loose coupling makes it a bit easier to access data since you can just inject a class that will have it instead of worrying too much about where it is coming from, in this way, you can create smaller and leaner classes. 

In my view to improve the code, I combined the DI with a factory pattern to determine which kind of sender to create, check it out:

*MessageSenderFactory.ts*
```
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
```
MessageSender.ts
```
export abstract class MessageSender{
    abstract sendMessage(message:string, recipient:string):boolean;
}

@Injectable()
export class SmsService implements MessageSender {
  sendMessage(message: string, recipient: string): boolean {
    console.log('smsService', message, recipient);
    return true;
  }
}

@Injectable()
export class GoodEmailService implements MessageSender {
  sendMessage(message: string, recipient: string): boolean {
    console.log('emailService',message, recipient);
    return true;
  }
}
```
NotificationSender.ts

```
@Injectable()
export class GoodNotificationSender {
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
```
