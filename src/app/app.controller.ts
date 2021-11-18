import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';

import { AppService } from './app.service';

@Controller('app')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('healthcheck')
    getHello(): string {
        return this.appService.getHello();
    }

    @UseGuards(JwtAuthGuard)
    @Get('authhealthcheck')
    getAuthHello(): string {
        return this.appService.getHello();
    }
}
