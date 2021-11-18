import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { AuthUserDto } from './auth.user.dto';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<{ id: number; email: string } | null> {
        const user = await this.userService.findOne(username);
        if (user && user.password === pass) {
            const { ...result } = user;
            return result;
        }
        return null;
    }

    async login(body: AuthUserDto) {
        const { email, password } = body;
        const result = await this.validateUser(email, password);
        if (!result) {
            throw new Error();
        }
        const payload = { sub: result.id, username: email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
