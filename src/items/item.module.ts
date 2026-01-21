import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemsService } from './item.service';

@Module({
  controllers: [ItemController],
  providers: [ItemsService],
})
export class ItemModule {}
