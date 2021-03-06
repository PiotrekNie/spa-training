import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { DataBaseModule } from './database/database.module';
import { ComponentsModule } from './components/components.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DataBaseModule,
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: true,
    }),
    ComponentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
