import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
import { MonitorService } from './monitor.service';
  
  @WebSocketGateway({
    cors: {origin: '*'}
  }
  )
  export class LocationGateway
    implements  OnGatewayConnection, OnGatewayDisconnect
  {

    constructor(private readonly monitorService: MonitorService) { }

    @WebSocketServer() 
    server: Server;
  

    handleConnection(client: Socket, ...args: any[]) {
      console.log(`Client connected: ${client.id}`);
    }
  
    handleDisconnect(client: Socket) {
      console.log(`Client disconnected: ${client.id}`); 
    }
  
    @SubscribeMessage('sendLocation')
    handleLocation(@MessageBody() data: { latitude: number; longitude: number }): void {
      console.log('Received location data:', data);
      

    }
  }
  