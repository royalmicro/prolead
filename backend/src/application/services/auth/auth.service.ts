import {
  HttpException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from 'src/domain/model/auth/register.dto';
import { CreateUserDto, UserDto } from 'src/domain/model/user/user.dto';
import { UserRepositoryInterface } from 'src/domain/model/user/user.repository.interface';
import { LicenceRepositoryInterface } from 'src/domain/model/licence/licence.repository.interface';
import { LicenceDto } from 'src/domain/model/licence/licence.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface<UserDto>,
    @Inject('LicenceRepositoryInterface')
    private readonly licenceRepository: LicenceRepositoryInterface<LicenceDto>,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userRepository.findByEmail(email, ['portal']);

    const equalPassword = await bcrypt.compare(pass, user.password);
    if (!equalPassword) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email, portal: user.portal };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;

    const userExists = await this.userRepository.findByEmail(email);
    if (userExists) {
      throw new HttpException('User already exists', 400);
    }

    const hashedPassword = await this.hashPassword(password);

    const newUser: CreateUserDto = { name, email, password: hashedPassword };
    this.userRepository.create(newUser);

    return { message: 'User registered successfully', user: newUser };
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 3;
    return await bcrypt.hash(password, saltRounds);
  }
}
