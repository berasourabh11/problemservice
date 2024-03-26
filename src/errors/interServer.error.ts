import BaseError from "./base.error";
import { StatusCodes } from "http-status-codes";

class InternalServerError extends BaseError {
  constructor(details: Record<string, unknown>) {
    super("BadRequestError", StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong" , details);
  }
}

export { InternalServerError};