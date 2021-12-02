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

    /**
     *  Get Content by id (args: id)
     */
    getContent(id: number): Content {
        return this.contents.find(content => content.id === id);
    }

    /**
     *  Get All Contents
     */
    getContents(): Content[] {
        return this.contents;
    }

    /**
     *  Create a new Content(args: name, active?)
     */
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

    /**
     *  Update an existing Content(args: id, name, active?)
     */
    updateContent(updateContentData: UpdateContentInput): Content {
        const requiredContent = this.contents.find(content => content.id === updateContentData.id);
        Object.assign(requiredContent, updateContentData);
        return requiredContent;
    }

    /**
     *  Delete an existing Content(args: id)
     */
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
