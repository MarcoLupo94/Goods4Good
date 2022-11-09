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
    try {
      return await this.CharityModel.create(newDonation);
    } catch (e) {
      console.log(e);
    }
  }

  async findAll() {
    try {
      return await this.CharityModel.find({});
    } catch (e) {
      console.log(e);
    }
  }

  async findOne(_id: string) {
    try {
      return await this.CharityModel.findById({ _id });
    } catch (e) {
      console.log(e);
    }
  }
}
