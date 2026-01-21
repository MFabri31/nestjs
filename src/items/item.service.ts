import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dtos/create-item.dt';

export interface Item {
  // id: `${string}-${string}-${string}-${string}-${string}`;
  id: number;
  title: string;
  isCompleted: boolean;
}

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findItemById(id: number) {
    console.log(id);

    const taskFound = this.items.find((item) => item.id === id);

    if (!taskFound) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return taskFound;
  }

  createItem(item: CreateItemDto) {
    const newItem = {
      ...item,
      id: this.items.length + 1,
    };
    this.items.push(newItem);
    return newItem;
  }
}
