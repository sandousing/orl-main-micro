import { Injectable } from '@nestjs/common';
import { Content } from './models/content';

@Injectable()
export class ContentService {
    private contents: Content[] = [
        {
            active: true,
            id: 1,
            name: 'TestContent1',
        },
        {
            active: false,
            id: 2,
            name: 'TestContent2',
        },
        {
            id: 3,
            name: 'TestContent3',
        },
    ];

    getAllContent(): string {
        return 'All the content ';
    }

    getContent(id): Content {
        return this.contents.find(content => content.id === id);
    }
}
