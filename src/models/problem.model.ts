import mongoose, { Document, Schema, Model } from "mongoose";

interface TestCase {
  input: string;
  output: string;
}

interface Problem extends Document {
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  testcases: TestCase[];
  editorial: string;
}

const problemSchema: Schema<Problem> = new Schema({
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
    type: String,
    required: true,
  }
});

const ProblemModel: Model<Problem> = mongoose.model<Problem>("Problem", problemSchema);

export default ProblemModel;