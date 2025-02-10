export class Instructor{
    constructor (userId:string,name:string,email:string,password:string,role:string){
    super(userId,name,email,password,role);
        this.userId = userId
        this.name = name
        this.email = email
        this.password = password
        this.role = role
    }
}
