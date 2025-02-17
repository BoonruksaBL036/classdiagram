import { Certificate } from "./Certificate";
import { Instructor } from "./Instructor";
import { Participant } from "./Participant";
import { v4 as uuidv4 } from "uuid"
import { Registration } from "./Registration";
import { register } from "module";

export class Activity {
    private activityId: string;
    private activityName: string;
    private organizer: string;
    private maxParticipant: number;
    private activityPeriod: string;
    private registrationPeriod: string;
    private status: boolean;
    private approvalRequest: boolean;
    private certificateIssued: boolean;
    private schedule: File | null;
    private isDeleted:boolean;

    public static activities:Activity [];

    constructor( activityId:string,activityName: string, organizer: string, maxParticipant: number, activityPeriod: string, registrationPeriod: string, status: boolean, appovalRequest: boolean, certificateIssued: boolean, schedule: File | null){
        this.activityId = activityId;
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequest = appovalRequest;
        this.certificateIssued = certificateIssued;
        this.schedule = schedule;

        this.isDeleted = false;
        Activity.activities.push(this)
    }

    public createActivity(activityId:string,activityName: string, organizer: string, maxParticipant: number, activityPeriod: string, registrationPeriod: string,status: boolean, appovalRequest: boolean, certificateIssued: boolean, schedule: File | null):Activity{
        return new Activity(activityId,activityName,organizer,maxParticipant,activityPeriod,registrationPeriod,status,appovalRequest,certificateIssued,schedule)
    }

    public updateActivity(activityId:string,activityName: string, organizer: string, maxParticipant: number, activityPeriod: string, registrationPeriod: string,status: boolean, appovalRequest: boolean, certificateIssued: boolean, schedule: File | null):void{
        this.activityId = activityId;
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequest = appovalRequest;
        this.certificateIssued = certificateIssued;
        this.schedule = schedule;
    }

    public getActivityName():string{
        return this.activityName
    }

    public publisActivity():void{
        this.status = true
    }

    public deleteActivity():void{
        this.isDeleted = true
    }

    public apporveParticipant(participants:Participant[]):void{
       for (let i = 0; i < Registration.registrations.length; i++){
        for (let j = 0; j < participants.length; j++){
            if(Registration.registrations[i].getParticipant().getName() == participants[j].getName()){
                Registration.registrations[i].setStatus("approved")
            }
        }
    }
        // Registration.registrations.forEach(register => register.setStatus("approved"))
    }

    public generateCertificate():void{

    }
}