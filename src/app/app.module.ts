import { Module, MiddlewareConsumer } from '@nestjs/common';

import { ReqestMiddleware } from 'src/shared/middlewares';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ContentModule } from 'src/test-content/content.module';
import { ContentService } from 'src/test-content/content.service';
import { ContentController } from 'src/test-content/content.controller';
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
        ContentModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        GraphQLModule.forRoot({
            autoSchemaFile: true,
            path: process.env.GRAPHQL_PATH,
        }),
    ],
    providers: [
        AppService,
        ContentService,
        // {
        //     provide: APP_FILTER,
        //     useClass: HttpErrorFilter,
        // },
        // {
        //     provide: APP_INTERCEPTOR,
        //     useClass: LoggerInterceptor,
        // },
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
