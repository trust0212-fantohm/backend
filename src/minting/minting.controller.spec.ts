import { Test, TestingModule } from '@nestjs/testing';
import { MintingController } from './minting.controller';
import { MintingService } from './minting.service';

describe('MintingController', () => {
  let controller: MintingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MintingController],
      providers: [MintingService],
    }).compile();

    controller = module.get<MintingController>(MintingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
