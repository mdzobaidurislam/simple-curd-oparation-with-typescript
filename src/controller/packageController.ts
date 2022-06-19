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

  // edit package
  export const editPackage = async (req: Request, res: Response) => {
    try {
      const result = await Package.findById(req.params.id);
      if (result) {
        res.json(result);
      } else {
        res.json("Package not found");
      }
    } catch (error) {
      res.json({
        err: error,
      });
    }
  }

// update package
export const updatepackage = async (req: Request, res: Response) => {
  try {
    const findPackage = await Package.findById(req.params.id);
    if(findPackage){

     Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err: any, result: any) => {
        if (err) {
          res.json({
            msg: "Package not updated!",
            error: err.message,
          });
        } else {
          res.json({
            msg: "Package Successfully Updated!",
          });
        }
      }
    );
  }else{
    res.json({
      msg: "Package not found!",
    });
  }
  } catch (error) {
    res.json({
      msg: "Package not found!",
    });
  }

}


 // delete
 export const deletePackage = async (req: Request, res: Response)=> {
  try {
    const { id } = req.params;
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
  
  // const { title, ...others } = req.query;
  const queryResult = req.query;
  const newQuery = {...queryResult}
  try {
    const result = await Package.find({
    ...newQuery
    })

    if(result.length > 0) {
      res.status(200).json(result[0]);
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
}