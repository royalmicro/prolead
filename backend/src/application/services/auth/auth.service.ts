import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/domain/services/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from 'src/domain/model/auth/register.dto';
import { CreateUserDto } from 'src/domain/model/user/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private users: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.users.findByEmail(email);

    const equalPassword = await bcrypt.compare(pass, user.password);
    if (!equalPassword) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;

    const userExists = await this.users.findByEmail(email);
    if (userExists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await this.hashPassword(password);
    const newUser: CreateUserDto = { name, email, password: hashedPassword };
    this.users.create(newUser);

    return { message: 'User registered successfully', user: newUser };
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 3;
    return await bcrypt.hash(password, saltRounds);
  }
}
