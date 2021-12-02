import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { orchestrators } from 'src/shared/config/orchestrator.config';
import { getOrchestratorClient } from 'src/utils/orchestratorClient';

@Injectable()
export class AppService {
    /**
     * Setting up server client for TCP channel communication with microservice(server)
     */
    private client: ClientProxy;

    private pingClient: ClientProxy;

    constructor() {
        /**
         * Get TCP client config for orchestrators as independent microservice
         */
        this.client = getOrchestratorClient({ type: orchestrators.assets });
        this.pingClient = getOrchestratorClient({ type: orchestrators.accounts });
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
        return this.client.send<string>('healthcheckpattern', '');
    }

    /**
     *  Receiving the data from TCP message pattern from microservice (server)
     */
    getMicroservicePing(): any {
        return this.client.send<string>('microservicePing', '');
    }

    /**
     *  Receiving the data from TCP message pattern from another microservice (microservice)
     */
    getMicroservicePingFromMicroservice({ pattern }): any {
        return this.pingClient.send<string>(`${pattern}`, '');
    }

    /**
     *  Dummy Ping function for TCP message pattern (microservice to microservice)
     *  ! To be written in 'ping' microservice service
    sendMicroservicePingToMicroservice(): string {
        return 'Hello from other microservice!';
    }
    */
}
