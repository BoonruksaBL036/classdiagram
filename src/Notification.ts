import { User } from "./User"

export class Notification {
    private  notificationId : string
    private reacipient : User = [];
    private message : string
    private status : string

    constructor(notificationId:string,message:string,status:string){
        this.notificationId = notificationId
        this.message = message
        this.status = status
    }

    public sendNotification():void{
        0
    }

    public toString():string{
        return  `Notification= [notificationId=${this.notificationId}]`
    }
}