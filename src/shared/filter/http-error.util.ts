import { Catch, ExceptionFilter, HttpException, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { ApplicationLoggerService } from 'src/logger/logger.service';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
    constructor(private applicationLogger: ApplicationLoggerService) {}

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const status = exception.getStatus ? exception.getStatus() : '5005';
        const exceptionResponse: any = exception.getResponse
            ? exception.getResponse()
            : { error: 'Internal Server Error' };
        /**
         * prepare the custom error message
         */
        let error = exceptionResponse && exceptionResponse.error;
        if (exceptionResponse.message) {
            error = error ? `${error} => ${exceptionResponse.message}` : error;
        }

        let errormessage = '';
        if (status !== HttpStatus.INTERNAL_SERVER_ERROR) {
            errormessage = exception.message;
        } else {
            errormessage = exception ? exception.message : 'Internal server error';
        }

        const errorResponseObject = {
            code: status,
            error,
            message: errormessage,
            method: request.method,
            path: request.url,
            requestId: request.requestId,
            status: false,
            timestamp: new Date().toLocaleString(),
        };
        if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
            this.applicationLogger.error('ExceptionFilter', `${request.method} ${request.url}`, exception.stack);
        } else {
            this.applicationLogger.error(
                'ExceptionFilter',
                `${request.method} ${request.url}`,
                JSON.stringify(errorResponseObject),
            );
        }
        response.status(404).json(errorResponseObject);
    }
}
