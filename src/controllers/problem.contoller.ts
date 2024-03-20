import { Request, Response } from "express";
import StatusCodes from "http-status-codes"

function pingProblemController(req: Request, res: Response) {
  return res.json({ message: "Pong from problem service" });
}

function addProblem(req: Request, res: Response) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function getProblems(req: Request, res: Response) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}
function getProblem(req: Request, res: Response) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function deleteProblem(req: Request, res: Response) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

function updateProblem(req: Request, res: Response) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not implemented" });
}

export {
  pingProblemController,
  addProblem,
  getProblems,
  getProblem,
  deleteProblem,
  updateProblem,
};
