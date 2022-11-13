import { Item, User } from '@charity-app-production/api-interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { item } from '../items/items.schema';
import { user, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(user.name) private userModel: Model<UserDocument>,
    @InjectModel(item.name) private itemModel: Model<ItemDocument>
  ) {}

  async create(userData: User) {
    try {
      const { email, username } = userData;
      const existingUser = await this.userModel.findOne({ email: email });
      if (!existingUser) {
        return await this.userModel.create({ email, username }); // do stuff here
      }
      return existingUser;
    } catch (e) {
      console.log(e);
    }
  }

  async findCart(_id: string): Promise<Item[]> {
    try {
      return await this.userModel.findById<Item[]>(_id).populate('cart').exec();
    } catch (e) {
      console.log(e);
    }
  }

  async addToCart(_id: string, item: Item) {
    try {
      const user = await this.userModel.findById(_id);
      user.cart.push(item);
      await user.save();
      return await user.populate('cart');
    } catch (e) {
      console.log(e);
    }
  }

  async removeFromCart(_id: string, itemId: string) {
    try {
      const user = await this.userModel.findById(_id);
      const item = await this.itemModel.findById(itemId);
      const indexToRemove = user.cart.indexOf(item);
      user.cart.splice(indexToRemove, 1);
      await user.save();
      return await user.populate('cart');
    } catch (e) {
      console.log(e);
    }
  }

  async emptyCart(_id: string) {
    try {
      const user = await this.userModel.findById(_id);
      user.cart = [];
      await user.save();
      return await user.populate('cart');
    } catch (e) {
      console.log(e);
    }
  }
}
