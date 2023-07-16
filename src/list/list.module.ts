import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { List } from './list.model';

@Module({
  imports: [SequelizeModule.forFeature([List])],
  providers: [ListService],
  controllers: [ListController],
  exports: [SequelizeModule],
})
export class ListModule {}
