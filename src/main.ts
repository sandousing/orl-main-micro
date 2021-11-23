import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app/app.module';
import { ApplicationLoggerService } from './logger/logger.service';
import { Transport } from '@nestjs/microservices';

/**
 * Creating microservice options object for TCP (microservice)
*/
const microserviceOptions = {
    transport: Transport.TCP,
    options:{
        host: process.env.TRANSPORT_HOST,
        port: process.env.TRANSPORT_PORT
    }
}

async function bootstrap() {
    /**
     * Initializing the AppModule with default express framework
     */
    const app = await NestFactory.create(AppModule);

    /**
     * Initializing the AppModule with default `express framework (microservice)
    */
    const microServiceApp = await NestFactory.createMicroservice(AppModule,microserviceOptions)

    /**
     * Initialize the config service
     */
    const configService = app.get(ConfigService);

    /**
     * Api prefix for all routers
     * Configurability: Reading the router prefix from .env file
     */
    app.setGlobalPrefix(configService.get('ROUTE_PREFIX'));

    /**
     * Custom context based logging service
     * Formats the log in desirable format
     */
    app.useLogger(new ApplicationLoggerService());

    /**
     * Validation pipe configuration for class-validators
     */
    app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: false, dismissDefaultMessages: false }));

    const options = new DocumentBuilder()
        .setTitle('Backend Template')
        .setDescription('The backend service API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);

    /**
     * import swagger path from the configuration
     */
    const swaggerPath = `${configService.get('ROUTE_PREFIX')}/${configService.get('SWAGGER_PATH')}`;
    SwaggerModule.setup(swaggerPath, app, document);

    /**
     * import port from the configuration
     */

    const port = configService.get('APP_PORT');
    await app.listen(port, () => {
        Logger.log(`Service started at ${port} port`);
    });

    /**
     * Listen function for microservice (microservice)
    */
    microServiceApp.listen(() => {
        Logger.log(`Microservice is listening ...`);
    });
}
bootstrap();
