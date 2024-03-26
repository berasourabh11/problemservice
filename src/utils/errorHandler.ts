import { NextFunction,Request,Response } from "express";
import BaseError from "../errors/base.error";
import { StatusCodes } from "http-status-codes";

function errorHandler(err:any,req:Request,res:Response,next:NextFunction){
    if(err instanceof BaseError){
        return res.status(err.statusCode).json({
            success:false,
            message:err.message,
            error:err.details,
            data:{}
        });
    }


    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success:false,
        message:"Something went wrong",
        error:err.details,
        data:{}
    });


}

export default errorHandler;