import { User } from "./User";

export class Notification {
    private  notificationId : string
    private recipient: User;
    private message : string
    private status : string

    constructor(notificationId:string, recipient: User, message:string,status:string){
        this.notificationId = notificationId
        this.recipient = recipient
        this.message = message
        this.status = status
    }

    public sendNotification():void{
        
    }

    public toString():string{
        return  `Notification= [notificationId=${this.notificationId}]`
    }
}