import { IsNotEmpty, IsEmail } from 'class-validator';

export class AuthUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}
