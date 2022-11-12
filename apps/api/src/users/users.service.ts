import { Item, User } from '@charity-app-production/api-interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { String } from 'aws-sdk/clients/apigateway';
import { Model } from 'mongoose';
import { user, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(user.name) private userModel: Model<UserDocument>) {}

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

  // async findAll(): Promise<User[]> {
  //   return this.userModel.find().exec();
  // }

  findOne(id: number) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, item: Item) {
    return `This action updates a #${id} user`;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
