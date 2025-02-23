import { Certificate } from "./Certificate";
import { Instructor } from "./Instructor";
import { Participant } from "./Participant";
import { Registration } from "./Registration";

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
    private instructor:Instructor;
    private certificate:Certificate;

    public static activities:Activity[];


    constructor(activityId:string, activityName:string, organizer:string, maxParticipant:number, activityPreiod:string, registrationPeriod:string, approvalRequest:boolean, status:boolean, certificateIssued:boolean, instructor:Instructor, certificate:Certificate, schedule:File | null,){
        this.activityId = activityId;
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPreiod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequest = approvalRequest;
        this.certificateIssued = certificateIssued;    
        this.isDeleted = false;
        this.instructor = instructor;
        this.certificate = certificate;
        this.schedule = schedule;

        Activity.activities.push(this);
    }


    public createActivity(activityId:string, activityName: string, organizer: string, maxParticipant: number, activityPeriod: string, registrationPeriod: string, status:boolean, approvalRequest: boolean, certificateIssued: boolean, instructor:Instructor, certificate:Certificate, schedule: File | null):Activity {
        return new Activity(activityId, activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequest, certificateIssued, instructor, certificate, null);
    }

    public updateActivity(activityName: string, organizer: string, maxParticipant: number, activityPeriod: string, registrationPeriod: string, status:boolean, approvalRequest: boolean, certificateIssued: boolean, instructor:Instructor, certificate:Certificate, schedule: File | null):void {
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequest = approvalRequest;
        this.certificateIssued = certificateIssued;    
        this.isDeleted = false;
        this.instructor = instructor;
        this.certificate = certificate;
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

    public generateCertificate(participants:Participant[]):void{
        for(let i=0; i<participants.length; i++){
            this.certificate.generateCertificate("cer1", participants[i] ,this.instructor, this, "", "");
        }
    }
}