import { ArgsType, Field } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';

@ArgsType()
export class GetListingArgs {
    @Field({ nullable: true })
    cityLabel: string;

    @Field({ nullable: true })
    localityId: string;

    @Field({ nullable: true })
    pagingStart: number;

    @Field({ nullable: true })
    pagingRows: number;

    @Field(() => [GraphQLJSONObject], { nullable: true })
    sortParams: [object];

    @Field({ nullable: true })
    builderId: string;
}
