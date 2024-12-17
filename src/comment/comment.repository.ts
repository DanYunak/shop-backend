import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { CommentEntity } from "./comment.entity";

@Injectable()
export class CommentRepository extends Repository<CommentEntity> {
    constructor(
        @InjectRepository(CommentEntity)
        repository: Repository<CommentEntity>
    ) {
        super(repository.target, repository.manager, repository.queryRunner)
    }

    async findByProductId(productId: number): Promise<CommentEntity[]> {
        return this.createQueryBuilder('comment')
            .where('comment.productId = :productId', { productId })
            .orderBy('comment.date', 'DESC')
            .getMany();
    }
}