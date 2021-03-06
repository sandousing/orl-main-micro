/* eslint-disable class-methods-use-this */
import { Controller, Get, Logger } from '@nestjs/common';
import { MessagePattern, Payload, Transport, Client, ClientKafka } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller('app')
export class AppController {
    @Client({
        options: {
            client: {
                brokers: ['kafka:9092'],
                clientId: 'orl-layer',
            },
            consumer: {
                groupId: 'random', // based on which orchestrator is using this, consumer groupId can be changed
            },
        },
        transport: Transport.KAFKA,
    })
    client: ClientKafka;

    // eslint-disable-next-line no-empty-function
    constructor(private readonly appService: AppService) {}

    async onModuleInit() {
        /* Need to subscribe to topic
         * so that we can get the response from kafka microservice
         */
        this.client.subscribeToResponseOf('orl-layer');
        await this.client.connect();
    }

    @Get('healthcheck')
    getHello(): string {
        return this.appService.getHello();
    }

    // Producing event to Kafka
    @Get('produce')
    produceEvent() {
        return this.client.send('orl-layer', 'Producing...'); // args - topic, message
    }

    // Consuming events from Kafka
    @MessagePattern('orl-layer') // Our topic name
    getMessage(@Payload() message) {
        Logger.log(message.value);
        return 'Hello World';
    }

    /**
     * API request (server)
     */
    @Get('healthcheckpattern')
    getHealthCheckPatternServer(): string {
        return this.appService.getHealthCheckPatternServer();
    }

    /**
     * API request (hybrid microservice server requesting to another microservice)
     */
    @Get('microservicePing')
    getMicroservicePing(): string {
        return this.appService.getMicroservicePing();
    }

    /**
     *  Using Message Pattern Decorator for TCP connection (microservice)
     */
    @MessagePattern('healthcheckpattern')
    getHealthCheckPatternMicro(): string {
        return this.appService.getHealthCheckPatternMicro();
    }

    /**
     *  Using Message Pattern Decorator for TCP connection to another microservice (microservice to microservice)
     */
    @MessagePattern('microservicePing')
    getMicroservicePingFromMicroservice(): string {
        return this.appService.getMicroservicePingFromMicroservice({ pattern: 'microservicePing' });
    }

    /**
     *  Using Message Pattern Decorator for TCP connection (microservice to microservice)
     *  ! To be written in 'ping' microservice controller
     @MessagePattern('microservicePing')
     sendMicroservicePingToMicroservice(): string {
        return this.appService.sendMicroservicePingToMicroservice();
     }
    */
}
