import { NextFunction, Request, Response } from "express";
import StatusCodes from "http-status-codes"
import { NotImplemented } from "../errors/notImplemented.error";

function pingProblemController(req: Request, res: Response) {
  return res.json({ message: "Pong from problem service" });
}

function addProblem(req: Request, res: Response,next:NextFunction) {
  try{
    throw new NotImplemented("add problem")
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
