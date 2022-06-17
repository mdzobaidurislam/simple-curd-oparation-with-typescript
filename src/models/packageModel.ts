
import mongoose, { Schema, Document } from 'mongoose';

export interface plansInterface extends Document {
  singlePerPax?:number;
  doublePerPax?:number;
  twinPerPax?:number;
  child7To12?:number;
  child3To6?:number;
  infant?:number;
}


export interface PackageInterface extends Document {
  id: number;
  title: string;
  description: string;
  startingPrice: number;
  duration: string;
  isMostPopular: boolean;
  isActive: boolean;
  cityName: string;
  plans?: plansInterface;
  createdAt: Date;
  updatedAt: Date;
}
const PackageSchema: Schema = new Schema({
  
    id: {
      type: Number,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default: "null",
    },
    startingPrice: {
      type: Number,
      default: 0,
    },
    duration: {
      type: String,
      default: "0",
    },
    isMostPopular: {
      type: Boolean,
      default:true,
    },
    isActive: {
      type: Boolean,
      default:true,
    },
    cityName: { 
      type: String,
      required: true,
    },
    plans: {
      singlePerPax: {
        type:mongoose.Types.Decimal128,
       
      },
      doublePerPax: {
        type:mongoose.Types.Decimal128,
      },
      twinPerPax: {
        type: Number,
      },
      triplePerPax: {
        type:mongoose.Types.Decimal128,
      },
      child7To12: {
        type:mongoose.Types.Decimal128,
      },
      child3To6: {
        type:mongoose.Types.Decimal128,
      },
      infant: {
        type:mongoose.Types.Decimal128,
      },
    }
  
});

const Package= mongoose.model<PackageInterface>('Package', PackageSchema);
export {Package}
