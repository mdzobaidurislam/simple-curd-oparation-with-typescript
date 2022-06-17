import mongoose,{Schema,Document } from "mongoose";

export interface CityInterface extends Document
 {

    cityName: string;
    isActive:  boolean;
    createdAt: Date;
    updatedAt: Date;
  }


const CitySchema:Schema = new Schema(
  {
    cityName: {
      type: String,
      required: true,
      unique: true,
    },
    isActive: {
      type: Boolean,
      default:true,
    },
   
   
},{ timestamps: true });

const City = mongoose.model<CityInterface>('City',CitySchema);


export {City}

