import {ProblemModel} from "../models";
import { ProblemType } from "../types";

class ProblemRepository{

  async createProblem(problemData:ProblemType){
    try{
      const problem = await ProblemModel.create({
        title: problemData.title,
        description: problemData.description,
        testcases: problemData.testcases ? problemData.testcases : [],
      });
      return problem;
    }catch(err){
      console.log(err)
      throw err;
    }

  }

}

export {ProblemRepository};