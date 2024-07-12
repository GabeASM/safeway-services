import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/createevent.dto';
import { Event } from './event.entity';
import { ClientProxy } from '@nestjs/microservices';
import { UserPosition } from './dto/userposition.dto';
import { EventReportedDto } from './dto/eventreported.dto';
import { EventReport } from './event.report.entity';

@Injectable()
export class EventeManagerService {
  
  constructor(@InjectRepository(Event) private readonly eventRepository: Repository<Event>,
  @InjectRepository(EventReport) private readonly reportRepository: Repository<EventReport>,
    @Inject('USER_SERVICE') private userClient: ClientProxy) { }

  getHello(): string {
    return 'Hello World!';
  }

  async getEventById(id: string) {
    const event = await this.eventRepository.findOne({ where: { id } })

    if (!event) throw new HttpException('EVENT_NOT_FOUND', 404)

    return event

  }

  async createEvent(createEvent: CreateEventDto) {
    const newEvenet = this.eventRepository.create(createEvent)
    const event = await this.eventRepository.save(newEvenet)
    return event;
  }
  async getUserEventsById(userId: number) {
    const eventsById = await this.eventRepository.find({ where: { userId } });
    return eventsById;
  }

  async getAllEvents() {
    return this.eventRepository.find()
  }
  async helloFromUsers() {
    return this.userClient.send({ cmd: 'hello' }, {})
  }

  async deleteEventById(idEvent: { id: string; }) {
    const eventFound = await this.eventRepository.findOne({where: { id: idEvent.id}})
    if (!eventFound) throw new HttpException('EVENT_NOT_FOUND', 404)
      const id = eventFound.id
      const eventDelete = await this.eventRepository.delete({id})
      return eventDelete
  }

  async findNearbyEvents2(userPosition: UserPosition) {
    console.log(`Esta es la latitud del usuario: ${userPosition.latitude}`);
    console.log(`Esta es la longitud del usuario: ${userPosition.longitude}`);

    const events: any[] = await this.eventRepository.query(`
        SELECT *, distance
        FROM (
            SELECT *, 
            (6371 * acos(cos(radians($1)) * cos(radians(latitude)) * cos(radians(longitude) - radians($2)) + sin(radians($1)) * sin(radians(latitude)))) AS distance 
            FROM events
        ) AS sub
        WHERE distance < $3
        ORDER BY distance
        LIMIT 10;
    `, [userPosition.latitude, userPosition.longitude, 50]);

    return events;
  }

  async reportEvent(event: EventReportedDto) {
    const eventFound = await this.eventRepository.findOne({ where: { id: event.id } })
    if (!eventFound) throw new HttpException('EVENT_NOT_FOUND', 404)
    
    const newEventReported = {
      originalIdEvent : eventFound.id,
      reason : event.reason,
      userIdCreator : eventFound.userId,
      
    } 
    const newReportEventCreated =  this.reportRepository.create(newEventReported);
    const reportSaved = await this.reportRepository.save(newReportEventCreated)
    return reportSaved;
  }

}
