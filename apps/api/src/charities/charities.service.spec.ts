import { Test, TestingModule } from '@nestjs/testing';
import { CharitiesService } from './charities.service';

describe('CharitiesService', () => {
  let service: CharitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharitiesService],
    }).compile();

    service = module.get<CharitiesService>(CharitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
