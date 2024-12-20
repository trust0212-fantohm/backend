import { Body, Controller, Post } from '@nestjs/common';
import { MintingService } from './minting.service';

@Controller('minting')
export class MintingController {
  constructor(private readonly mintingService: MintingService) {}

  @Post()
  async mintNFT(@Body('address') address: string) {
    return this.mintingService.mintNFT(address);
  }
}
