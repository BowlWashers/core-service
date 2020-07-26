import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create({ email, password }): Promise<User> {
    const lowerCaseEmail = email.toLowerCase();
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.usersRepository.create({
      email: lowerCaseEmail,
      password: hashedPassword,
    });
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  // TODO: restrict the option format
  async findAll(options: FindManyOptions): Promise<User[]> {
    return this.usersRepository.find(options);
  }

  async delete(id: number): Promise<void> {
    await this.usersRepository.softDelete(id);
  }

  async restore(id: number): Promise<void> {
    await this.usersRepository.restore(id);
  }
}
