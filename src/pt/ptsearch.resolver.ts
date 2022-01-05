import { Args, Info, Query, Resolver } from '@nestjs/graphql';
import { fieldsMap } from 'graphql-fields-list';

import { GetListingArgs } from './dto/args/getListing.args';
import { Project } from './models/projectList';
import { PtSearchService } from './ptsearch.service';

@Resolver()
export class PtSearchResolver {
    constructor(private readonly ptSearchService: PtSearchService) {}

    /**
     *  Get Project Listings by id args(cityLabel,localityId)
     */
    @Query(() => [Project], { name: 'projectListing', nullable: true })
    getAllListings(@Args() getListingArgs: GetListingArgs, @Info() info): any {
        const fieldMap = fieldsMap(info);
        return this.ptSearchService.getAllListings(getListingArgs, fieldMap);
    }
}
