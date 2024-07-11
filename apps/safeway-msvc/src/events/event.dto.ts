export class CreateEventDto{
    image : string 
    category : string 
    description : string 
    latidude : number
    longitude : number
    userId : number
}

export class ReportEventDto{
    id : string 
    reason : string 
}