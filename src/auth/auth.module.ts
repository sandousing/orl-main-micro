import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local/local.strategy';
import { JwtConstants } from './contstants/jwt.constant';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
    controllers: [AuthController],
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: JwtConstants.secret,
            signOptions: { expiresIn: JwtConstants.expiresIn },
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
