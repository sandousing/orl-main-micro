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

    @Query(() => Content, { name: 'content', nullable: true })
    getContent(@Args() getContentArgs: GetContentArgs): Content {
        return this.contentService.getContent(getContentArgs.id);
    }

    @Query(() => [Content], { name: 'contents', nullable: 'items' })
    getContents(): Content[] {
        return this.contentService.getContents();
    }

    @Mutation(() => Content)
    createContent(@Args('createContentData') createContentData: CreateContentInput): Content {
        return this.contentService.createContent(createContentData);
    }

    @Mutation(() => Content)
    updateContent(@Args('updateContentData') updateContentData: UpdateContentInput): Content {
        return this.contentService.updateContent(updateContentData);
    }

    @Mutation(() => Content)
    deleteContent(@Args('deleteContentData') deleteContentData: DeleteContentInput): Content {
        return this.contentService.deleteContent(deleteContentData);
    }
}
