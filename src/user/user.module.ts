import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationLoggerService } from 'src/logger/logger.service';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';

@Module({
    controllers: [UserController],
    exports: [UserService],
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService, ApplicationLoggerService],
})
export class UserModule {}
