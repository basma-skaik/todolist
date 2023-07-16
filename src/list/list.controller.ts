import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  NotFoundException,
  Body,
} from '@nestjs/common';
import { ListService } from './list.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Controller('list')
export class ListController {
  constructor(private listSrvice: ListService) {}

  @Get()
  findAll() {
    return this.listSrvice.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.listSrvice.findOne(id);
    if (!task) {
      throw new NotFoundException('task not found!');
    }
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.listSrvice.create(createTaskDto.task);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.listSrvice.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listSrvice.remove(id);
  }
}
