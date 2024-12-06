import { ConfigModule, ConfigService } from '@nestjs/config';

ConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
});

const configService = new ConfigService();

export const jwtConstants = {
  secret:
    configService.get<string>('JWT_SECRET') || 'rzxlszyykpbgqcflzxsqcysyhljt',
};
