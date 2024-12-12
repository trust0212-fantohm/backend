import { Module } from '@nestjs/common';
import { MintingService } from './minting.service';
import { MintingController } from './minting.controller';

@Module({
  controllers: [MintingController],
  providers: [MintingService],
})
export class MintingModule {}
