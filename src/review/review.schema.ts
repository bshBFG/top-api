import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Product } from 'src/product/product.schema';

export type ReviewDocument = Review & Document;

@Schema({ timestamps: true })
export class Review {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop({ type: SchemaTypes.ObjectId, ref: Product.name })
  productId: Types.ObjectId;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
