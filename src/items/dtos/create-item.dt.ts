import { IsBoolean, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator'


export class CreateItemDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  isCompleted: boolean;
}
