import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { List } from './list.model';

@Injectable()
export class ListService {
  constructor(@InjectModel(List) private list: typeof List) {}

  findAll() {
    return this.list.findAll();
  }

  findOne(id: string) {
    return this.list.findByPk(id);
  }

  create(task: string) {
    return this.list.create({ task });
  }

  async update(id: string, attrs: Partial<List>) {
    const task = await this.list.findByPk(id);
    Object.assign(task, attrs);
    return this.list.update(task, { where: { id } });
  }

  remove(id: string) {
    return this.list.destroy({ where: { id } });
  }
}
