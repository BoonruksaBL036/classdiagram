import { Participant } from './Participant';
import { Activity } from './Activity';
export class Registertion {
    private registrationId : number
    private activity : Activity
    private participant : Participant
    private status : string

    constructor (registrationId:number,activity:Activity,participant:Participant,status:string){
        this.registrationId = registrationId
        this.activity = activity
        this.participant = participant
        this.status = status
    }

    public sumbitRegirtration():void{
         0
    }

    public updateRegistration():void{
        0
    }

    public toString():string{
        return `Registration = [ registrationId = ${this.registrationId}},activity = ${this.activity},participant=${this.participant},status=${this.status}]`
    }
}