import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Content {
    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field({ nullable: true })
    active?: boolean;
}
