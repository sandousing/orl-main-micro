import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../../user/user.entity';

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        const dbconfigs = this.configService.get('database');
        return {
            database: dbconfigs.DB_DATABASE,
            entities: [User],
            host: dbconfigs.DB_HOST,
            logging: true,
            password: dbconfigs.DB_PASSWORD,
            synchronize: true,
            type: dbconfigs.DB_TYPE,
            username: dbconfigs.DB_USERNAME,
        };
    }
}
