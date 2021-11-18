import { Module } from '@nestjs/common';
import { ApplicationLoggerService } from './logger.service';

@Module({
    exports: [ApplicationLoggerService],
    providers: [ApplicationLoggerService],
})
export class ApplicationLoggerModule {}
