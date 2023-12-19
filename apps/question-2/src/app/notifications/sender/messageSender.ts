export abstract class MessageSender{
    abstract sendMessage(message:string, recipient:string):boolean;
    
}