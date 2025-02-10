export class User {
    private userId:string
    private name:string
    private email:string
    private password:string
    private role:string

    constructor(userId:string,name:string,email:string,password:string,role:string){
        this.userId = userId
        this.name = name
        this.email = email
        this.password = password
        this.role = role
    }
    
    public getUserId():string{
        return this.userId
    }

    public getName():string{
        return this.name
    }

    public setName(name:string):void{
        this.name = name
    }

    public getEmail():string{
        return this.email
    }

    public setEmail(email:string):void{
        this.email = email
    }

    public getPassword():string{
        return this.password
    }

    public setPassword(password:string):void{
        this.password = password
    }

    public getRole():string{
        return this.role
    }

    public setRole(role:string):void{
        this.role = role
    }

    public Register(email:string,password:string):boolean{
        return true
    }

    public Login(email:string,password:string):boolean{
        return true
    }

    public Logout():boolean{
        return true
    }

    public toString():string{
        return `User[userId=${this.userId},name=${this.name},email=${this.email},password=${this.password},role=${this.role}]`
    }
}