import { Module } from "@nestjs/common";
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { ProductController } from './product.controller';
import { CommentRepository } from '../comment/comment.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { CommentEntity } from '../comment/comment.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product, CommentEntity])
    ],
    providers: [ProductService, ProductRepository, CommentRepository],
    controllers: [ProductController]
})

export class ProductModule {}