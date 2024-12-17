import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { CommentEntity } from '../comment/comment.entity';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    findAll() {
        return this.productService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productService.findOne(id)
    }

    @Post()
    create(@Body() product: Product) {
        return this.productService.create(product)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() product: Product) {
        return this.productService.update(id, product)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productService.delete(id)
    }

    @Post(':id/comments')
    addComment(@Param('id') id: number, @Body() comment: CommentEntity) {
        comment.productId = id
        return this.productService.addComment(comment)
    } 

    @Delete('comments/:id')
    deleteComment(@Param('id') id: number) {
        return this.productService.deleteComment(id)
    }
}