import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // TODO: follow: https://docs.nestjs.com/techniques/configuration
    GraphQLModule.forRoot({
      // TODO: investigate
      // include: [CatsModule],
      // debug: false,
      // playground: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
