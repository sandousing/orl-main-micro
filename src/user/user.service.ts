import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApplicationLoggerService } from 'src/logger/logger.service';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private applicationLogger: ApplicationLoggerService,
    ) {
        this.applicationLogger.log('UserService');
    }
}
