import  express  from "express";
import { problemController } from "../../controllers";

const problemRouter = express.Router();

problemRouter.get("/ping", problemController.pingProblemController);

problemRouter.get("/:id", problemController.getProblem);

problemRouter.get("/", problemController.getProblems);

problemRouter.post("/", problemController.addProblem);

problemRouter.put("/:id", problemController.updateProblem);

problemRouter.delete("/:id", problemController.deleteProblem);

export {
    problemRouter
}