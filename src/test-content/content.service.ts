import { Injectable } from '@nestjs/common';

import { CreateContentInput } from './dto/input/createContent.input';
import { DeleteContentInput } from './dto/input/deleteContent.input';
import { UpdateContentInput } from './dto/input/updateContent.input';
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

    getContent(id: number): Content {
        return this.contents.find(content => content.id === id);
    }

    getContents(): Content[] {
        return this.contents;
    }

    createContent(createContentData: CreateContentInput): Content {
        const { name, active } = createContentData;
        const newContent = {
            active,
            id: this.contents.length + 1,
            name,
        };
        this.contents.push(newContent);
        return newContent;
    }

    updateContent(updateContentData: UpdateContentInput): Content {
        const requiredContent = this.contents.find(content => content.id === updateContentData.id);
        Object.assign(requiredContent, updateContentData);
        return requiredContent;
    }

    deleteContent(deleteContentData: DeleteContentInput): Content {
        const contentIndex = this.contents.findIndex(content => content.id === deleteContentData.id);
        let requiredContent = null;
        if (contentIndex !== -1) {
            requiredContent = this.contents[contentIndex];
        }
        this.contents.splice(contentIndex, 1);
        return requiredContent;
    }
}
