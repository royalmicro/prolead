import { Module } from '@nestjs/common';
import { AuthService } from './services/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { Controllers } from './controllers';
import { jwtConstants } from 'src/constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './services/auth/auth.guard';
import { DomainModule } from 'src/domain/domain.module';

@Module({
  imports: [
    DomainModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3200s' },
    }),
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [...Controllers],
})
export class ApplicationModule {}
