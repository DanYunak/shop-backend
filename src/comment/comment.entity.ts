import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from '../product/product.entity';

@Entity()
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;

  @Column()
  description: string;

  @Column()
  date: string;

  @ManyToOne(() => Product, (product) => product.comments)
  product: Product
}