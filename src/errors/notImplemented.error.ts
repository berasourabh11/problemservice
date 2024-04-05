import BaseError from "./base.error";
import { StatusCodes } from "http-status-codes";

class NotImplemented extends BaseError {
  constructor(methodName:string) {
    super("BadRequestError", StatusCodes.NOT_IMPLEMENTED, `${methodName} Not Implemented`, {});
  }
}

export { NotImplemented };