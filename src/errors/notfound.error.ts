import BaseError from "./base.error";
import {StatusCodes} from 'http-status-codes';

class NotFoundError extends BaseError {
  constructor(resourceName:string, resourceValue:string) {
    super("NOT_FOUND_ERROR", StatusCodes.NOT_FOUND, `The requested resource: ${resourceName} with vlaue ${resourceValue} not found` , {
      resourceName: resourceName,
      resourceValue: resourceValue
    });
  }
}

export { NotFoundError};