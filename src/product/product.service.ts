import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';
import { CommentRepository } from '../comment/comment.repository';
import { CommentEntity } from '../comment/comment.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository,
        @InjectRepository(CommentRepository)
        private commentRepository: CommentRepository
    ) { }

    findAll(): Promise<Product[]> {
        return this.productRepository.findAllProducts();
    }

    findOne(id: number): Promise<Product> {
        return this.productRepository.findOneProduct(id);
    }

    create(product: Product): Promise<Product> {
        return this.productRepository.save(product);
    }


    async update(id: number, product: Product): Promise<Product> {
        await this.productRepository.update(id, product);
        return this.findOne(id);
    }

    delete(id: number): Promise<void> {
        return this.productRepository.delete(id).then(() => undefined);
    }

    addComment(comment: CommentEntity): Promise<CommentEntity> {
        return this.commentRepository.save(comment)
    }

    deleteComment(id: number): Promise<void> {
        return this.commentRepository.delete(id).then(() => undefined);
    }
}