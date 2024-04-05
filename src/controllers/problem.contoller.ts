import { NextFunction, Request, Response } from "express";
import StatusCodes from "http-status-codes";
import { NotImplemented } from "../errors/notImplemented.error";
import { ProblemService } from "../services/";
import { ProblemRepository } from "../repositories";

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req: Request, res: Response) {
  return res.json({ message: "Pong from problem service" });
}

async function addProblem(req: Request, res: Response, next: NextFunction) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Problem created successfully",
      error: {},
      data: {
        problem: newProblem,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req: Request, res: Response, next: NextFunction) {
  try {
    const problems = await problemService.getProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problems fetched successfully",
      error: {},
      data: {
        problems: problems,
      },
    });
  } catch (error) {
    next(error);
  }
}
async function getProblem(req: Request, res: Response, next: NextFunction) {
  try {
    const problemID = req.params.id;
    const problem = await problemService.getProblem(problemID);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problem fetched successfully",
      error: {},
      data: {
        problem: problem,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req: Request, res: Response, next: NextFunction) {
  try {
    const problemID = req.params.id;
    const problem = await problemService.deleteProblem(problemID);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problem deleted successfully",
      error: {},
      data: {
        problem: problem,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function updateProblem(req: Request, res: Response, next: NextFunction) {
  try {
    const problemID = req.params.id;
    const updatedProblem = await problemService.updateProblem(problemID, req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problem updated successfully",
      error: {},
      data: {
        problem: updatedProblem,
      },
    });
  } catch (error) {
    next(error);
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
