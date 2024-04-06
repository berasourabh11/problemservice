import { logger } from "../config/logger.config";
import { deleteProblem } from "../controllers/problem.contoller";
import { NotFoundError } from "../errors/notfound.error";
import { ProblemModel } from "../models";
import { ProblemType } from "../types";

class ProblemRepository {
  async createProblem(problemData: ProblemType) {
    try {
      const problem = await ProblemModel.create({
        title: problemData.title,
        description: problemData.description,
        testcases: problemData.testcases ? problemData.testcases : [],
      });
      return problem;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getProblems() {
    try {
      const problems = await ProblemModel.find({});
      return problems;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getProblem(problemId: string) {
    try {
      const problem = await ProblemModel.findById(problemId);
      if (!problem) {
        logger.error(`Problem with id ${problemId} not found in the DB`);
        throw new NotFoundError("Problem", problemId);
      }
      return problem;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async deleteProblem(problemId: string) {
    try {
      const problem = await ProblemModel.findByIdAndDelete(problemId);
      if (!problem) {
        logger.error(`Problem with id ${problemId} not found in the DB`);
        throw new NotFoundError("Problem", problemId);
      }
      return problem;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async updateProblem(problemId: string, problemData: ProblemType) {
    try {
      const problem = await ProblemModel.findByIdAndUpdate(
        problemId,
        {
          title: problemData.title,
          description: problemData.description,
          testcases: problemData.testcases ? problemData.testcases : [],
          editorial: problemData.editorial ? problemData.editorial : "",
        },
        { new: true }
      );
      if (!problem) {
        logger.error(`Problem with id ${problemId} not found in the DB`);
        throw new NotFoundError("Problem", problemId);
      }
      return problem;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export { ProblemRepository };
