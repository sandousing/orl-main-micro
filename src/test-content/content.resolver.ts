import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { ContentService } from './content.service';
import { GetContentArgs } from './dto/args/getContent.args';
import { CreateContentInput } from './dto/input/createContent.input';
import { DeleteContentInput } from './dto/input/deleteContent.input';
import { UpdateContentInput } from './dto/input/updateContent.input';
import { Content } from './models/content';

@Resolver(() => Content)
export class ContentResolver {
    constructor(private readonly contentService: ContentService) {}

    /**
     *  Get Content by id (args: id)
     */
    @Query(() => Content, { name: 'content', nullable: true })
    getContent(@Args() getContentArgs: GetContentArgs): Content {
        return this.contentService.getContent(getContentArgs.id);
    }

    /**
     *  Get All Contents
     */
    @Query(() => [Content], { name: 'contents', nullable: 'items' })
    getContents(): Content[] {
        return this.contentService.getContents();
    }

    /**
     *  Create a new Content(args: name, active?)
     */
    @Mutation(() => Content)
    createContent(@Args('createContentData') createContentData: CreateContentInput): Content {
        return this.contentService.createContent(createContentData);
    }

    /**
     *  Update an existing Content(args: id, name, active?)
     */
    @Mutation(() => Content)
    updateContent(@Args('updateContentData') updateContentData: UpdateContentInput): Content {
        return this.contentService.updateContent(updateContentData);
    }

    /**
     *  Delete an existing Content(args: id)
     */
    @Mutation(() => Content)
    deleteContent(@Args('deleteContentData') deleteContentData: DeleteContentInput): Content {
        return this.contentService.deleteContent(deleteContentData);
    }
}
