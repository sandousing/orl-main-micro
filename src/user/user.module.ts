import { Module } from '@nestjs/common';

import { ApplicationLoggerService } from 'src/logger/logger.service';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
    controllers: [UserController],
    exports: [UserService],
    providers: [UserService, ApplicationLoggerService],
})
export class UserModule {}
