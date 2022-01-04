import { Module } from '@nestjs/common';
import { PtSearchResolver } from './ptsearch.resolver';
import { PtSearchService } from './ptsearch.service';

@Module({
    providers: [PtSearchResolver, PtSearchService],
})
export class PtSearchModule {}
