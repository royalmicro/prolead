import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from 'src/domain/services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/infrastructure/persistence/orm/user.orm';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class ApplicationModule {}
