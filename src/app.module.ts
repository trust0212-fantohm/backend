import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MintingModule } from './minting/minting.module';

@Module({
  imports: [MintingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
