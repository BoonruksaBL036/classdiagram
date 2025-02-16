import { Activity } from "./Activity";
import { User } from "./User";

export class Participant extends User {
    private activity : Activity [] = [];
    constructor (userId:string,name:string,email:string,password:string,role:string){
        super(userId,name,email,password,role);
    }

    public registerForActivity():void{
        0
    }
    
    public getRegistration

    public seachActivity(keyword:string):Activity[]{
        return this.activity.filter(item => item.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    }
}