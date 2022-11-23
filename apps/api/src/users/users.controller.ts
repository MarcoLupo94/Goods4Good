import { Item, User, Favorite } from '@charity-app-production/api-interfaces';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Post('favorites')
  addToFavorites(@Body() body: Favorite) {
    return this.usersService.addFavorite(
      body.userId,
      body.charityId,
      body.charity
    );
  }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  @Get(':id')
  findCart(@Param('id') _id: string) {
    try {
      return this.usersService.findCart(_id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Not found',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        }
      );
    }
  }

  @Patch(':id')
  addToCart(@Param('id') _id: string, @Body() item: Item) {
    try {
      return this.usersService.addToCart(_id, item);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          error: 'NOT_MODIFIED',
        },
        HttpStatus.NOT_MODIFIED,
        {
          cause: error,
        }
      );
    }
  }
  @Patch('remove/:id')
  removeFromCart(@Param('id') _id: string, @Body() body) {
    const { itemId } = body;
    try {
      return this.usersService.removeFromCart(_id, itemId);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          error: 'NOT_MODIFIED',
        },
        HttpStatus.NOT_MODIFIED,
        {
          cause: error,
        }
      );
    }
  }

  @Patch('remove-favorite/:charityId')
  removeFavorite(@Param('charityId') charityId: string, @Body() body) {
    try {
      const { userId } = body;

      return this.usersService.removeFavorite(charityId, userId);
    } catch (error) {
      // console.log(error, 'backend remove error');
      // return error;
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          error: 'FAVORITE_NOT_REMOVED',
        },
        HttpStatus.NOT_MODIFIED,
        {
          cause: error,
        }
      );
    }
  }

  @Delete(':id')
  emptyCart(@Param('id') _id: string) {
    try {
      return this.usersService.emptyCart(_id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          error: 'NOT_MODIFIED',
        },
        HttpStatus.NOT_MODIFIED,
        {
          cause: error,
        }
      );
    }
  }
}
