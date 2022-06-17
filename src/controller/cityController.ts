import { Request, Response } from "express";
import { City } from "../models/cityModel";

export const allCity = (req: Request, res: Response) => {
    const data = City.find((err: any, citys: any) => {
      if (err) {
        res.send(err);
      } else {
        res.json({success: true,results:citys});
      }
    });
  };


  // city
  
export const addCity = async (req: Request, res: Response) => {
   try {
    const dataBody:{} = req.body
    const result = await City.create(dataBody,(err:any, result:any) => {
      if (err) {
        res.json({
          msg: "City not Added!",
          error: err.message,
        });
      } else {
        res.json({
          msg: "City Successfully Added!",
          result
        });
      }
    });
   } catch (error) {
    res.json({
      err: error,
    });
   }
    
  };

  // edit city
  export const editCity = async (req: Request, res: Response) => {
    try {
      const result = await City.findById(req.params.id);
      if (result) {
        res.json(result);
      } else {
        res.json("City not found");
      }
    } catch (error) {
      res.json({
        err: error,
      });
    }
  }

  // update city
  export const updateCity = async (req: Request, res: Response) => {
    try {
      const findCity = await City.findById(req.params.id);
      if(findCity){

      const city = City.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err: any, city: any) => {
          if (err) {
            res.json({
              msg: "City not updated!",
              error: err.message,
            });
          } else {
            res.json({
              msg: "City Successfully Updated!",
            });
          }
        }
      );
    }else{
      res.json({
        msg: "City not found!",
      });
    }
    } catch (error) {
      res.json({
        msg: "City not found!",
      });
    }

  }

  // delete
  export const deleteCity = async (req: Request, res: Response)=> {
    try {
      const { id } = req.params;
   console.log(id)
    const findCity = await City.findById(id);
    console.log(findCity)
    if (findCity) {
      const result = await City.findByIdAndDelete({
        _id: id,
      });
      if (result) {
        res.json({
          msg: "City Deleted Successfully!",
        });
      }
    } else {
      res.json({
        msg: "City not found!",
      });
    }
    } catch (error) {
      res.json({
        err: error,
      });
    }
  }