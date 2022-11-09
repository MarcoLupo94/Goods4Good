import { Test, TestingModule } from '@nestjs/testing';
import { CharitiesController } from './charities.controller';
import { CharitiesService } from './charities.service';

describe('CharitiesController', () => {
  let controller: CharitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharitiesController],
      providers: [CharitiesService],
    }).compile();

    controller = module.get<CharitiesController>(CharitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
