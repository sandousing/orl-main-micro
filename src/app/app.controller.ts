import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices'

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
     *  Using Message Pattern Decorator for TCP connection (microservice)
    */
    @MessagePattern('healthcheckpattern')
    getHealthCheckPatternMicro(): string {
        return this.appService.getHealthCheckPatternMicro();
    }
}
