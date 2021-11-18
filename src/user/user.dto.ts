import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}
