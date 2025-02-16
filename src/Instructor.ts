import { Activity } from "./Activity";
import { User } from "./User"

export class Instructor extends User {
    constructor (userId:string,name:string,email:string,password:string,role:string){
    super(userId,name,email,password,role);
    }

    public createActivity():void{
        return 
    }

    public approvePartivipant():void{
        return
    }

    public issueCertificate():void{
        return
    }

    public seachActivity(keyword:string):Activity{
        return 0
    }
    
}
