import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateContentInput {
    @Field(() => Int)
    @IsNotEmpty()
    id: number;

    @Field()
    @IsNotEmpty()
    name: string;

    @Field({ nullable: true })
    active?: boolean;
}
