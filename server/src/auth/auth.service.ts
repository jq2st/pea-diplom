import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PostLoginRequestDto } from './dto/post-login-request.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostLoginResponseDto } from './dto/post-login-response.dto';
import { UserEntity } from 'src/database/entities/users';
import * as bcrypt  from 'bcrypt'
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { PostRegistrationRequestDto } from './dto/post-registration-request.dto';
import { env } from 'process';

@Injectable()
export class AuthService {

  constructor( 
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private jwtService: JwtService
  ) {}

  async login(data: PostLoginRequestDto): Promise<PostLoginResponseDto> {
    const options = {
      where: {
        login: data.login
      }
    }
    const user = await this.usersRepository.findOne(options)
    if (!user) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    const login = user.login
    const password = user.password
    const isMatch = await bcrypt.compare(data.password, password);
    if (!isMatch) {
      throw new HttpException('Wrong User Password', HttpStatus.UNAUTHORIZED);
    }
    const payload = { 
      login: login, 
      sub: user.id 
    }
    const jwtOptions: JwtSignOptions = {
      secret: env.JWT_SECRET
    }
    try {
      const token = await this.jwtService.signAsync(payload, jwtOptions)
      const body = {token}
      return body
    } catch(error) {
      console.log(error)
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async register(data: PostRegistrationRequestDto, isAdmin: boolean = false): Promise<{}> {
    const options = {
      where: {
        login: data.login
      }
    }
    const existUser = await this.usersRepository.findOne(options)
    if (existUser) {
      throw new HttpException('User Exists', HttpStatus.CONFLICT);
    }
    try {
      const saltRounds = 15
      const password = await bcrypt.hash(data.password, saltRounds)
      const user = {
        ...data,
        password: password,
        isAdmin: isAdmin ? isAdmin : false
      }
      const userEntity = this.usersRepository.create(user)
      await this.usersRepository.save(userEntity)
      return Promise.resolve({})
    } catch(error) {
      console.log(error)
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }  

}
