import { Controller, Res, ValidationPipe, Post, Body, HttpStatus, Get, Req } from '@nestjs/common';
import { Response, Request } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.dto';
import { Pagination } from '../pagination';
import { Users } from 'src/entities';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUsers(@Req() request: Request, @Res() res) : Promise<Pagination<Users>> {
    const data = await this.userService.getUsers({
      limit: request?.query?.limit ? +request.query.limit : 10,
      page: request?.query?.page ? +request.query.page:  1,
      search: request?.query?.q ?? '',
    }
);

    return res.status(HttpStatus.OK).json(data)
  }

  @Post('create')
  async create(@Res() res: Response, @Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    const data = await this.userService.createUsers(createUserDto);

    return res.status(HttpStatus.OK).json({
      message: 'Successfully create ',
      data,
    })
  }
}
