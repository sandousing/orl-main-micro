import { Module } from '@nestjs/common';
import { ContentService } from './content.service';

@Module({
    exports: [ContentService],
    providers: [ContentService],
})
export class ContentModule {}
