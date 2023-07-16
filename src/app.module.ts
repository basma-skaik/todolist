import { Module } from '@nestjs/common';
import { ListModule } from './list/list.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { List } from './list/list.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'list',
      models: [List],
    }),
    ListModule,
  ],
})
export class AppModule {}
