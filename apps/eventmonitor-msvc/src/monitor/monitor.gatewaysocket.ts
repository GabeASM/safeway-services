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
  
    clientIdSocket : string  

    handleConnection(client: Socket, ...args: any[]) {
      console.log(`Client connected: ${client.id}`);
      this.clientIdSocket = client.id
    }
  
    handleDisconnect(client: Socket) {
      console.log(`Client disconnected: ${client.id}`); 
    }
  
    @SubscribeMessage('sendLocation')
    async handleLocation(client: Socket, @MessageBody() userPosition: { latitude: number; longitude: number } , )  {
      //console.log('Received location data:', userPosition);
      const clientId = this.clientIdSocket
      //console.log(clientId)
      
      const notifications = await this.monitorService.sendEventsToNotiMsvc(userPosition , this.clientIdSocket)

      if (!notifications){
        this.server.to(clientId).emit('notifications', { message: notifications });
      }

      // console.log('notificaciones recibidas y listas para enviar al telefono -> ', notifications )
      

      this.server.to(clientId).emit('notifications', { message: notifications });
    }
  }
  