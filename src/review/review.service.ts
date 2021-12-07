import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review, ReviewDocument } from './review.schema';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: Model<ReviewDocument>,
  ) {}

  async create(dto: CreateReviewDto): Promise<Review> {
    return this.reviewModel.create(dto);
  }

  async delete(id: string): Promise<Review | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async deleteByProductId(productId: string) {
    return this.reviewModel.deleteMany({ productId }).exec();
  }

  async findByProductId(productId: string): Promise<Review[]> {
    return this.reviewModel.find({ productId }).exec();
  }
}
