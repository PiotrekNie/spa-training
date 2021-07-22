import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  exports: [TypeOrmModule],
})
export class DataBaseModule {
  constructor(connection: Connection) {
    if (connection.isConnected) {
      console.log('Connected to DB!!!');
    }
  }
}
