import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

// TODO: investigate, copy from https://github.com/nestjs/nest/blob/master/sample/23-graphql-code-first/src/app.module.ts
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // TODO: follow: https://docs.nestjs.com/techniques/configuration
    RecipesModule,
    GraphQLModule.forRoot({
      // TODO: investigate
      autoSchemaFile: 'schema.gql',
      include: [RecipesModule],
      // debug: false,
      // playground: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
