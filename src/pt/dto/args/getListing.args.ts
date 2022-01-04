import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetListingArgs {
    @Field()
    cityLabel: string;

    @Field()
    localityId: string;
}
