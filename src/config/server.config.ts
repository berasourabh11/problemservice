import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const DB_URI = process.env.MONGO_URI;

export { PORT , DB_URI};