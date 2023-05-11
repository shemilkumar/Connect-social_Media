import mongoose from "mongoose";

// Configuring .env file using dotenv
import * as dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/.env` });

import app from "./app";

// Connecting our database
mongoose.set("strictQuery", false);
process.env.DB &&
  mongoose
    .connect(process.env.DB)
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running in port ${port}`);
});
