import mongoose, { Schema, Model } from "mongoose";
import { ProblemType } from "../types/problem.types";


const problemSchema: Schema<ProblemType> = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: [true, "Difficulty is required"],
    default: "easy",
  },
  testcases: [
    {
      input: {
        type: String,
        required: [true, "Input is required"],
      },
      output: {
        type: String,
        required: [true, "Output is required"],
      },
    }
  ],
  editorial: {
    type: String
  }
});

const ProblemModel: Model<ProblemType> = mongoose.model<ProblemType>("Problem", problemSchema);

export default ProblemModel;