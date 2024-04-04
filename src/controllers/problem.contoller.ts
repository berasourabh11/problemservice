import { NextFunction, Request, Response } from "express";
import StatusCodes from "http-status-codes"
import { NotImplemented } from "../errors/notImplemented.error";
import { ProblemService } from "../services/";
import { ProblemRepository } from "../repositories";

const problemService= new ProblemService(new ProblemRepository());


function pingProblemController(req: Request, res: Response) {
  return res.json({ message: "Pong from problem service" });
}

async function addProblem(req: Request, res: Response,next:NextFunction) {
  try{
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success:true,
      message:"Problem created successfully",
      error:{},
      data:{
        problem:newProblem
      }
    });
  } catch (error) {
    next(error)
  }
}

function getProblems(req: Request, res: Response,next:NextFunction) {
  try{
    throw new NotImplemented("add problem")
  } catch (error) {
    next(error)
  }
}
function getProblem(req: Request, res: Response,next:NextFunction) {
    try{
    throw new NotImplemented("add problem")
  } catch (error) {
    next(error)
  }
}

function deleteProblem(req: Request, res: Response,next:NextFunction) {
    try{
    throw new NotImplemented("add problem")
  } catch (error) {
    next(error)
  }
}

function updateProblem(req: Request, res: Response,next:NextFunction) {
    try{
    throw new NotImplemented("add problem")
  } catch (error) {
    next(error)
  }
}

export {
  pingProblemController,
  addProblem,
  getProblems,
  getProblem,
  deleteProblem,
  updateProblem,
};
