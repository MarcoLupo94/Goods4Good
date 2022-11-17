import { Charity } from '@charity-app-production/api-interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { charity, CharityDocument } from './charities.schema';
// TODO check security + auth
@Injectable()
export class CharitiesService {
  constructor(
    @InjectModel(charity.name) private CharityModel: Model<CharityDocument>
  ) { }

  async create(newCharity: Charity | Charity[]) {
    return await this.CharityModel.create(newCharity);
  }

  async findAll() {
    return await this.CharityModel.find({});
  }

  async findOne(id: string) {
    return await this.CharityModel.findById({ id });
  }

  async update(id: string, updatedCharity: Charity) {
    await this.CharityModel.deleteOne({ id });
    return await this.CharityModel.create(updatedCharity);
  }
}

/* test */