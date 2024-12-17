import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CommentEntity } from '../comment/comment.entity'

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    imageUrl: string

    @Column()
    name: string

    @Column()
    count: number

    @Column('json')
    size: { width: number, height: number }

    @Column()
    weight: string

    @OneToMany(() => CommentEntity, (comment) => comment.product, { cascade: true })
    comments: CommentEntity[]
}