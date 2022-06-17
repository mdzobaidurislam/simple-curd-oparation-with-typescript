import { Request, Response } from "express";
import { Package } from "../models/packageModel";

// all packages
export const allPackage = (req: Request, res: Response) => {
  try {
    const data = Package.find((err: any, packages: any) => {
      if (err) {
        res.send(err);
      } else {
        res.json(packages);
      }
    });
  } catch (error) {
    res.json({
      err: error,
    });
  }
};


// add package 
export const addPackage = async (req: Request, res: Response) => {
  try {
    
  const dataBody:{} = req.body
  const data:{} = {
    id:Math.floor(Math.random() * 99999999),
    ...dataBody 
  }
  const result = await Package.create(data,(err:any, result:any) => {
    if (err) {
      res.json({
        msg: "Package not Added!",
        error: err.message,
      });
    } else {
      res.json({
        msg: "Package Successfully Added!",
      });
    }
  });
  } catch (error) {
    res.json({
      err: error,
    });
  }
  
};

 // delete
 export const deletePackage = async (req: Request, res: Response)=> {
  try {
    const { id } = req.params;
 console.log(id)
  const findPackage = await Package.findById(id);
 
  if (findPackage) {
    const result = await Package.findByIdAndDelete({
      _id: id,
    });
    if (result) {
      res.json({
        msg: "Packeage Deleted Successfully!",
      });
    }
  } else {
    res.json({
      msg: "Packeage not found!",
    });
  }
  } catch (error) {
    res.json({
      err: error,
    });
  }
}

// filter packages

export const packagesFilter = async (req: Request, res: Response) => {
  const fiterQuery = req.query
  console.log(fiterQuery); 
  const query = {id: fiterQuery.search}
  try {
    const result = await Package.find(query);
    if(result.length > 0) {
      res.status(200).json(result);
    }else{
      res.json({
        msg: "Packeage not found!",
      });
    }

  } catch (error) {
    res.json({
      err: error
    });
  }
  res.json(query)
}