import { ProblemRepository } from "../repositories";
import { ProblemType } from "../types";
import { sanitizeMarkdown } from "../utils";

class ProblemService{
  private problemRepository: ProblemRepository;
  constructor(problemRepository: ProblemRepository){
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData: ProblemType){
      try{
        problemData.description = await sanitizeMarkdown(problemData.description);
      }catch(err){
        console.log(err);
        throw err;
      }

      const problem= this.problemRepository.createProblem(problemData);
      return problem;
  }

  async getProblems(){
      const problems = await this.problemRepository.getProblems();
      return problems;
  }

  async getProblem(problemId: string){
      const problem = await this.problemRepository.getProblem(problemId);
      return problem;
  }

  async deleteProblem(problemId: string){
      const problem = await this.problemRepository.deleteProblem(problemId);
      return problem;
  }

  async updateProblem(problemId: string,problemData: ProblemType){
      try{
        problemData.description = await sanitizeMarkdown(problemData.description);
      }catch(err){
        throw err;
      }

      const problem = await this.problemRepository.updateProblem(problemId,problemData);
      return problem;
  }
}

export { ProblemService };