import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentService {
    getAllContent(): string {
        return 'All the content ';
    }
}
