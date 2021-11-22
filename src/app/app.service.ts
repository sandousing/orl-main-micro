import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
@Injectable()
export class AppService {
    /**
     * Setting up server client for TCP channel communication with microservice(server)
    */
    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: process.env.TRANSPORT_HOST,
                port: Number(process.env.TRANSPORT_PORT),
            },
        });
    }


    getHello(): string {
        return 'Hello Backend';
    }

    /**
     *  Dummy health check for TCP message pattern (microservice)
    */
    getHealthCheckPatternMicro(): string {
        return 'Hello from a TCP World';
    }

    /**
     *  Receiving the data from TCP message pattern from microservice (server)
    */
    getHealthCheckPatternServer(): any {
        return this.client.send<string>('healthcheckpattern', '')
    }
}
