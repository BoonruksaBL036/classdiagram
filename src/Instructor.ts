import { Certificate } from "./Certificate";
import { Activity } from "./Activity";
import { User } from "./User"
import { Participant } from "./Participant";

export class Instructor extends User {
    constructor (userId:string,name:string,email:string,password:string,role:string){
    super(userId,name,email,password,role);
    }

    public createActivity(activityId:string,activityName:string, organizer:string, maxParticipant:number, activityPreiod:string, registrationPreiod:string, approvalRequest:boolean, certificateIssued:boolean, schedule:File | null, certificate:Certificate):Activity {
        const newActivity = new Activity(activityId,activityName, organizer, maxParticipant, activityPreiod, registrationPreiod, approvalRequest, certificateIssued, true, this, certificate, schedule);
        return newActivity;
    }

    public approveParticipant():void{
        return
    }

    public issueCertificate(participant:Participant, activity:Activity, sinature:string, template:string):Certificate {
        return new Certificate("cer1", participant,this, activity, sinature, template);
    }

    public searchActivity(keyword:string):Activity[] {
        return Activity.activities.filter(user => user.getActivityName().toLowerCase().includes(keyword.toLowerCase()))
    }
    
}
