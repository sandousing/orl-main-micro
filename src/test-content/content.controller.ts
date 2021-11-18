import { Controller, Get, Inject } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApplicationLoggerService } from 'src/logger/logger.service';
import { ContentService } from './content.service';

@ApiBearerAuth()
@ApiTags('content')
@Controller('content')
export class ContentController {
    @Inject()
    private contentService: ContentService;

    constructor(private appLogger: ApplicationLoggerService) {
        this.appLogger.setContext('ContenService');
    }

    @Get('/fetch')
    @ApiOperation({ summary: 'Fetch test content' })
    @ApiResponse({ description: 'Forbidden.', status: 403 })
    @ApiResponse({ description: 'Content fetched.', status: 200 })
    getAllContent(): string {
        return this.contentService.getAllContent();
    }
}
