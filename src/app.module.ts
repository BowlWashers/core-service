import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { UsersModule } from './app/modules/users/users.module';

// TODO: investigate, copy from https://github.com/nestjs/nest/blob/master/sample/23-graphql-code-first/src/app.module.ts
// import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // TODO: follow: https://docs.nestjs.com/techniques/configuration
    UsersModule,
    TypeOrmModule.forRoot({
      // TODO: move to config
      // TODO: investigate how transaction is done in TypeORM: https://typeorm.io/#/transactions/creating-and-using-transactions
      type: 'mysql',
      host: 'localhost',
      port: 4306,
      username: 'root',
      password: 'rootPassword',
      database: 'test',
      autoLoadEntities: true,
      // TODO: use migration instead of synchronize: https://github.com/ambroiseRabier/typeorm-nestjs-migration-example
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      // TODO: investigate
      autoSchemaFile: './src/app/schema.gql',
      include: [UsersModule],
      fieldResolverEnhancers: ['interceptors'],
      // debug: false,
      // playground: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
