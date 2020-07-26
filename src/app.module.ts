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
    // RecipesModule,
    UsersModule,
    TypeOrmModule.forRoot({
      // TODO: move to config
      type: 'mysql',
      host: 'localhost',
      port: 4306,
      username: 'root',
      password: 'rootPassword',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      // TODO: investigate
      autoSchemaFile: './src/app/schema.gql',
      include: [
        // RecipesModule,
        UsersModule,
      ],
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
