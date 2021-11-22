import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Content {
    @Field()
    id: number;

    @Field(() => Int)
    name: string;

    @Field({ nullable: true })
    active?: boolean;
}
