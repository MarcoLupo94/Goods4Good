import { Item, User } from '@charity-app-production/api-interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { item, ItemDocument } from '../items/items.schema';
import { user, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(user.name) private userModel: Model<UserDocument>,
    @InjectModel(item.name) private itemModel: Model<ItemDocument>
  ) {}

  async create(userData: User) {
    try {
      const { email } = userData;
      const existingUser = await this.userModel.findOne({ email: email });
      if (!existingUser) {
        return await this.userModel.create({
          ...userData,
          donations: [],
          cart: [],
        });
      }
      return existingUser;
    } catch (e) {
      console.log(e);
    }
  }

  async findCart(_id: string) {
    try {
      const user = await this.userModel.findById(_id).populate('cart');
      const cart = await this.itemModel.find({
        _id: { $in: user.cart },
      });
      return cart || [];
    } catch (e) {
      console.log(e);
    }
  }

  async addToCart(_id: string, item: Item) {
    try {
      const user = await this.userModel.findById(_id).populate('cart');
      user.cart.push(item._id);
      await user.save();
      return await this.itemModel.find({
        _id: { $in: user.cart },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async removeFromCart(_id: string, itemId: string) {
    try {
      const user = await this.userModel.findById(_id).populate('cart');
      const indexToRemove = user.cart.indexOf(itemId);
      user.cart.splice(indexToRemove, 1);
      await user.save();
      return await this.itemModel.find({
        _id: { $in: user.cart },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async emptyCart(_id: string) {
    try {
      const user = await this.userModel.findById(_id);
      user.cart = [];
      await user.save();
      return user.cart;
    } catch (e) {
      console.log(e);
    }
  }
}
