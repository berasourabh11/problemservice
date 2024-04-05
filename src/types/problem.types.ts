import { Document } from "mongoose";

interface TestCase {
  input: string;
  output: string;
}

export interface ProblemType extends Document {
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard" | null;
  testcases: TestCase[] | null;
  editorial: string | null;
}