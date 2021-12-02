import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

@Schema()
export class HhData {
  @Prop()
  count: number;

  @Prop()
  juniorSalary: number;

  @Prop()
  middleSalary: number;

  @Prop()
  seniorSalary: number;
}

export const HhDataSchema = SchemaFactory.createForClass(HhData);

@Schema()
export class TopPageAdvantage {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const TopPageAdvantageSchema =
  SchemaFactory.createForClass(TopPageAdvantage);

export type TopPageDocument = TopPage & Document;

@Schema({ timestamps: true })
export class TopPage {
  @Prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @Prop()
  secondCategory: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop({ type: HhDataSchema })
  hh?: HhData;

  @Prop({ type: [TopPageAdvantageSchema] })
  advantages: TopPageAdvantage[];

  @Prop()
  seoText: string;

  @Prop()
  tagsTitle: string;

  @Prop({ type: String })
  tags: string[];
}

export const TopPageSchema = SchemaFactory.createForClass(TopPage);
