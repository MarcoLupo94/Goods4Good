import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CharitiesModule } from '../charities/charities.module';
import { DonationsModule } from '../donations/donations.module';
import { environment } from '../environments/environment';
import { ItemsModule } from '../items/items.module';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { S3serviceService } from './s3service/s3service.service';
@Module({
  imports: [
    MongooseModule.forRoot(environment.MONGO_DB),
    UsersModule,
    CharitiesModule,
    ItemsModule,
    DonationsModule,
  ],
  controllers: [AppController],
  providers: [AppService, S3serviceService],
})
export class AppModule {}
