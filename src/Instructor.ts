import { Certificate } from "./Certificate";
import { Activity } from "./Activity";
import { User } from "./User"

export class Instructor extends User {
    constructor (userId:string,name:string,email:string,password:string,role:string){
    super(userId,name,email,password,role);
    }

    public createActivity(activityId:string,activityName: string, organizer: string, maxParticipant: number, activityPeriod: string, registrationPeriod: string, status: boolean, appovalRequest: boolean, certificateIssued: boolean, schedule: File | null):Activity{
        return new Activity(activityId,activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, appovalRequest, certificateIssued, schedule)
    }

    public approveParticipant():void{
        return
    }

    public issueCertificate():void{
        return
    }

    public searchActivity(keyword:string):Activity[] {
        return Activity.activities.filter(user => user.getActivityName().toLowerCase().includes(keyword.toLowerCase()))
    }
    
}
