import BaseError from "./base.error";
import { StatusCodes } from "http-status-codes";

class BadRequest extends BaseError {
  constructor(propertyName:string,details: Record<string, unknown>) {
    super("BadRequestError", StatusCodes.BAD_REQUEST, `The property ${propertyName} is invalid`, details);
  }
}

export { BadRequest};