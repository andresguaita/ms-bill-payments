import { Inject, Injectable } from '@nestjs/common';
import { EventBridgeClient, PutEventsCommand } from '@aws-sdk/client-eventbridge';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EventBridgeAdapter {
    constructor(
        @Inject('eventBridgeClient') private eventBridgeClient: EventBridgeClient,
        @Inject('config') private config: ConfigService
      ) {}


  async sendEvent(eventDetail: any, eventSource: string, detailType: string): Promise<void> {
    const params = {
      Entries: [
        {
          Source: eventSource,
          DetailType: detailType,
          Detail: JSON.stringify(eventDetail),
          EventBusName: this.config.get('EVENT_BUS_NAME'), 
        },
      ],
    };

    const command = new PutEventsCommand(params);

    try {
      await this.eventBridgeClient.send(command);  // Usamos el cliente con el comando PutEventsCommand
      console.log('Event sent successfully:', params);
    } catch (error) {
      console.error('Error sending event to EventBridge:', error);
      throw error;
    }
  }
}

