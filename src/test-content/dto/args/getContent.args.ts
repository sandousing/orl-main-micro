import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetContentArgs {
    @Field(() => Int)
    id: number;
}
