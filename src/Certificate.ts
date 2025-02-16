import { Activity } from "./Activity"
import { Instructor } from "./Instructor"
import { Participant } from "./Participant"

export class Certificate {
    private certificateId : string
    private recipient : Participant  [] = []
    private issuer : Instructor [] = []
    private activity : Activity [] = []
    private signature : string
    private templete : string

    constructor(certificateId:string,signature:string,template:string){
        this.certificateId = certificateId
        this.signature = signature
        this.templete = template
    }

    public generateCertificate():void{
        0
    }

    public sendNotification():void{
        0
    }
}