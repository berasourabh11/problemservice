import winston from "winston";
import path from "path";

const allowedTransport = [];

const customPrintf = winston.format.printf((info) => {
  let message = `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`;
  if (info.stack) {
    message += `\nStack Trace: ${info.stack}`;
  }
  return message;
});

allowedTransport.push(new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    customPrintf
  )
}));

allowedTransport.push(new winston.transports.File({
  filename: path.join(__dirname, "../../logs/error.log"),
  level: 'error',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    customPrintf
  )
}));

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.errors({stack: true}),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    customPrintf
  ),
  transports: allowedTransport
});
