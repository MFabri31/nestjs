import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import type { Item } from './item.service';
import { ItemsService } from './item.service';
import { CreateItemDto } from './dtos/create-item.dt';

@Controller('/items')
export class ItemController {
  constructor(private readonly itemService: ItemsService) { }

  @Get()
  getAllItems() {
    return this.itemService.findAll();
  }

  @Get('/:id')
  getItem(@Param('id', ParseIntPipe) id: number) {
    return this.itemService.findItemById(id);
  }

  @Post()
  createItem(@Body() item: CreateItemDto) {
    console.log(item);
    return this.itemService.createItem(item);
  }
}
