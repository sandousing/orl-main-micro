import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetContentArgs {
    @Field()
    id: number;
}
