import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CharitiesModule } from '../charities/charities.module';
import { environment } from '../environments/environment';
import { ItemsModule } from '../items/items.module';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    MongooseModule.forRoot(environment.MONGO_DB),
    UsersModule,
    CharitiesModule,
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
