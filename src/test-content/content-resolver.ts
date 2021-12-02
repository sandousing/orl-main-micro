import { Args, Query, Resolver } from '@nestjs/graphql';

import { ContentService } from './content.service';
import { GetContentArgs } from './dto/args/getContent.args';
import { Content } from './models/content';

@Resolver(() => Content)
export class ContentResolver {
    constructor(private readonly contentService: ContentService) {}

    @Query(() => Content, { name: 'content', nullable: true })
    getContent(@Args() getContentArgs: GetContentArgs): Content {
        return this.contentService.getContent(getContentArgs.id);
    }
}
