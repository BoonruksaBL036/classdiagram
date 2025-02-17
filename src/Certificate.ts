import { Activity } from "./Activity"
import { Instructor } from "./Instructor"
import { Notification } from "./Notification"
import { Participant } from "./Participant"

export class Certificate {
    private certificateId : string
    private participant : Participant  
    private issuer : Instructor 
    private activity : Activity 
    private signature : string
    private template : string

    constructor(certificateId:string,participant:Participant,issuer : Instructor ,activity : Activity,signature:string,template:string,){
        this.certificateId = certificateId
        this.participant = participant
        this.issuer = issuer
        this.activity = activity
        this.signature = signature
        this.template = template
    }

    public getcertificateId():string{
        return this.certificateId
    }
    
    public generateCertificate(certificateId:string,participant:Participant,issuer : Instructor ,activity : Activity,signature:string,template:string):Certificate{
        return new Certificate (certificateId,participant,issuer,activity,signature,template)
    }

    public sendNotification():Notification{
        const notification = new  Notification("NO1",this.participant,"เกียรติพร้อมดาวน์โหลดเเล้ว","อนุมัติ")
        return notification
    }
}