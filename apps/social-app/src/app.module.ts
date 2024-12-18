import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common';
import Joi from 'joi';
import { AppRepository } from './app.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, ProfileSchema } from './schemas/profile.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required()
      }),
      envFilePath: './app/social-app/.env'
    }),
    DatabaseModule,
    MongooseModule.forFeature([{name: Profile.name, schema: ProfileSchema}])
  ],
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule {}
