import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { orchestrators } from 'src/config';

/**
 * Get TCP client configuration for orchestrators as independent microservice client
 */
export function getOrchestratorClient({ type }: { type: number }): ClientProxy {
    let client: ClientProxy;
    switch (type) {
        case orchestrators.assets:
            client = ClientProxyFactory.create({
                transport: Transport.TCP,
                options: {
                    host: process.env.ASSETS_HOST,
                    port: Number(process.env.ASSETS_PORT),
                },
            });
            break;
        case orchestrators.accounts:
            client = ClientProxyFactory.create({
                transport: Transport.TCP,
                options: {
                    host: process.env.ACCOUNTS_HOST,
                    port: Number(process.env.ACCOUNTS_PORT),
                },
            });
            break;
        case orchestrators.search:
            client = ClientProxyFactory.create({
                transport: Transport.TCP,
                options: {
                    host: process.env.SEARCH_HOST,
                    port: Number(process.env.SEARCH_PORT),
                },
            });
            break;
    }
    return client;
}
