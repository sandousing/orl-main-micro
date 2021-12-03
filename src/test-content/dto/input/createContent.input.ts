import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateContentInput {
    @Field()
    @IsNotEmpty()
    name: string;

    @Field({ nullable: true })
    active?: boolean;
}
