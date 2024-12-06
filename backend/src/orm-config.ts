import { DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
});

const configService = new ConfigService();
export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  entities: [__dirname + '/infrastructure/persistence/orm/*.orm.{ts,js}'],
  migrations: [__dirname + '/infrastructure/persistence/migrations/*.ts'],
  synchronize: false,
};
