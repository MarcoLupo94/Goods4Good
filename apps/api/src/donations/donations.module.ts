import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsController } from './donations.controller';
import { donation, DonationSchema } from './donations.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: donation.name, schema: DonationSchema },
    ]),
  ],
  exports: [
    MongooseModule.forFeature([
      { name: donation.name, schema: DonationSchema },
    ]),
  ],
  controllers: [DonationsController],
  providers: [DonationsService],
})
export class DonationsModule {}
