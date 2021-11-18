import { Module, MiddlewareConsumer } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from 'src/shared/filter/http-error.util';
import { LoggerInterceptor } from 'src/logger/logger.interceptor';
import { ReqestMiddleware } from 'src/shared/middlewares';
import { ConfigModule } from '@nestjs/config';
import { ContentModule } from 'src/test-content/content.module';
import { ContentService } from 'src/test-content/content.service';
import { ContentController } from 'src/test-content/content.controller';
import { AuthModule } from 'src/auth/auth.module';
import { dbconfig } from 'src/shared/config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionService } from 'src/shared/orm/database-connection.service';
import { AppService } from './app.service';
import { ApplicationLoggerModule } from '../logger/logger.module';
import { AppController } from './app.controller';

/**
 * Appmodule responsible for injecting all the middlewares and config modules
 */
@Module({
    controllers: [AppController, ContentController],
    imports: [
        ApplicationLoggerModule,
        AuthModule,
        ContentModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [dbconfig],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: DatabaseConnectionService,
        }),
    ],
    providers: [
        AppService,
        ContentService,
        {
            provide: APP_FILTER,
            useClass: HttpErrorFilter,
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggerInterceptor,
        },
    ],
})
export class AppModule {
    /**
     * Adding middleware configuration
     */
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ReqestMiddleware).forRoutes('*');
    }
}
