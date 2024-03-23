class BaseError extends Error {
  name: string;
  statusCode: number;
  description: string;
  details: Record<string, unknown>; // Use an appropriate type for details

  constructor(name: string, statusCode: number, description: string, details: Record<string, unknown>) {
    super(`${name}: ${description}`);
    this.name = name;
    this.statusCode = statusCode;
    this.description = description;
    this.details = details;

  }
}

export default BaseError;
