import { Body, Controller, Delete, Get, Param } from '@nestjs/common';
import { ProductModel } from '../product/product.model';
import { ReviewModel } from './review.model/review.model';

@Controller('review')
export class ReviewController {

  async create(@Body() dto: Omit<ReviewModel, '_id'>){

  }

  @Delete(':id')
  async delete(@Param('id') id:string){

  }
  @Get('byProduct/:product_id')
  async getByProduct(@Param('productId') productId: string){

  }

}
