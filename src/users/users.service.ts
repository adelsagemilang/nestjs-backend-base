import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create.dto';
import { Pagination, PaginationOptionsInterface } from '../pagination';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>
  ) {}

  async getUsers(options: PaginationOptionsInterface): Promise<Pagination<Users>> {
    const [results, total] = await this.userRepository.findAndCount({
      order: { updatedAt: 'DESC' },
      take: options.limit,
      skip: options.limit * (options.page - 1),
    });

    return new Pagination<Users>({
      results,
      total,
    });
  }

  async createUsers(data: CreateUserDto) {
    return this.userRepository.save(data)
  }
}
