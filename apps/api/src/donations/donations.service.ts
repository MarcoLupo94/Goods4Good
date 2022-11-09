import { Donation } from '@charity-app-production/api-interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { donation, DonationDocument } from './donations.schema';

@Injectable()
export class DonationsService {
  constructor(
    @InjectModel(donation.name) private CharityModel: Model<DonationDocument>
  ) {}

  async create(newDonation: Donation) {
    return await this.CharityModel.create(newDonation);
  }

  async findAll() {
    return await this.CharityModel.find({});
  }

  async findOne(_id: string) {
    return await this.CharityModel.findById({ _id });
  }
}
