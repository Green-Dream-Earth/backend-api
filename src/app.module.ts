import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversitiesModule } from './universities/universities.module';
import { CommentsModule } from './comments/comments.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UniversitiesModule,
    CommentsModule
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule { }
