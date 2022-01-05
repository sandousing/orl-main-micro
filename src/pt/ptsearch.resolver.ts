import { Args, Query, Resolver } from '@nestjs/graphql';
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
    getAllListings(@Args() getListingArgs: GetListingArgs): any {
        return this.ptSearchService.getAllListings(getListingArgs);
    }
}
