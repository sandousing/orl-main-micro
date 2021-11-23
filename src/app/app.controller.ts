import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller('app')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('healthcheck')
    getHello(): string {
        return this.appService.getHello();
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
