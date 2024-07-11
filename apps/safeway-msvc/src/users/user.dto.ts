export class CreateUser {
    username: string
    mail: string
    password: string
}
export class UserData{ 
    username : string 
}
export class ReportUserDto{
    originalUserID: string
    username: string
    reason : string 
}