import { Module } from '@nestjs/common';
import { UserService } from 'src/domain/services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/infrastructure/persistence/orm/user.orm';
import { AuthService } from './services/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { Controllers } from './controllers';
import { jwtConstants } from 'src/constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './services/auth/auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3200s' },
    }),
  ],
  providers: [
    UserService,
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [...Controllers],
})
export class ApplicationModule {}
