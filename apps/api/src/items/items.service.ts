import { Item } from '@charity-app-production/api-interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { item, ItemDocument } from './items.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(item.name) private ItemModel: Model<ItemDocument>) {}

  async create(newItem: Item) {
    return await this.ItemModel.create(newItem);
  }

  async find(_id: string) {
    return await this.ItemModel.find({
      charity_shop: _id,
    });
  }
}
