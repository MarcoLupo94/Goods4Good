import { Item, User, Charity } from '@charity-app-production/api-interfaces';
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

  async addFavorite(userId: string, charityId: string, charity: Charity) {
    try {
      // Get the current user
      const user = await (
        await this.userModel.findById(userId)
      ).populate('favoriteCharities');

      // Check if the charity ID already exists in the favorite IDs array
      const charityAlreadyFavorite = user.favoriteCharities.some(
        (favoriteCharity) => {
          if (favoriteCharity._id === charityId) {
            return true;
          } else {
            return false;
          }
        }
      );
      // throw new Error('Test favorite error');
      if (charityAlreadyFavorite) {
        await user.save();
        return user;
      } else {
        user.favoriteCharities.push(charity);
        await user.save();
        return user;
      }
    } catch (error) {
      console.log(error);
      return { errorMessage: 'There was an error in adding a favorite' };
    }
  }

  async removeFavorite(charityId: string, userId: string) {
    try {
      const user = await this.userModel
        .findById(userId)
        .populate('favoriteCharities');

      const targetCharity = user.favoriteCharities.find((favoriteCharity) => {
        return favoriteCharity._id === charityId;
      });
      const targetCharityIndex = user.favoriteCharities.indexOf(targetCharity);

      user.favoriteCharities.splice(targetCharityIndex, 1);

      await user.save();
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
