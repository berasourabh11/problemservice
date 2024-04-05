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
      // 1. Sanitize the markdown content
      const sanitizedDescription = await sanitizeMarkdown(problemData.description);
      const problem= this.problemRepository.createProblem(problemData);
      return problem;
    }catch(err){
      console.log(err)
      throw err;
    }

  }

  async getProblems(){
    try{
      const problems = await this.problemRepository.getProblems();
      return problems;
    }catch(err){
      console.log(err)
      throw err;
    }
  }

  async getProblem(problemId: string){
    try{
      const problem = await this.problemRepository.getProblem(problemId);
      return problem;
    }catch(err){
      console.log(err)
      throw err;
    }
  }


}

export { ProblemService };