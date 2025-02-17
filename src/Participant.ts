import { Activity } from "./Activity";
import { Registration } from "./Registration";
import { User } from "./User";

export class Participant extends User {
    constructor (userId:string,name:string,email:string,password:string,role:string){
        super(userId,name,email,password,role);
    }

    public getName(): string {
        return this.getName();
    }

    public registerForActivity(activity:Activity):Registration{
        return new Registration(1,activity,this,"Pending")
    }

    public searchActivity(keyword:string):Activity[]{
        return Activity.activities.filter(item => item.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    }

    public downloadCertificate():string{
        return "ดาวน์โหลด certificate แล้ว"
    }

    public toString(): string {
        return `Participant=[User=${super.toString()}]`
    }
}