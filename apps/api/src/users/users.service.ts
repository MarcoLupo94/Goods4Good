import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(user: User) {
    console.log(user);
    return this.userModel.create(user);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, user: User) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
