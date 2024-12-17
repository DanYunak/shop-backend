import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from './product.entity';

@Injectable()
export class ProductRepository extends Repository<Product> {
    constructor(
        @InjectRepository(Product)
        repository: Repository<Product>
    ) {
        super(repository.target, repository.manager, repository.queryRunner)
    }

    async findAllProducts(): Promise<Product[]> {
        return this.createQueryBuilder('product')
            .leftJoinAndSelect('product.comments', 'comment')
            .orderBy('product.name', 'ASC')
            .addOrderBy('product.count', 'ASC')
            .getMany()
    }

    async findOneProduct(id: number): Promise<Product | undefined> {
        return this.createQueryBuilder('product')
            .leftJoinAndSelect('product.comments', 'comment')
            .where('product.id = :id', { id })
            .getOne();
    }
}