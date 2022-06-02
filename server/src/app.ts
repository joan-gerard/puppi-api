import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import puppyRoutes from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

// ------------------
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// ------------------

app.use(cors());
app.use(puppyRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.6xuj9.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
// mongoose.set("useFindAndModify", false); mongoose.set("useFindAndModify", false

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    })
  )
  .catch((error) => {
    throw error;
  });
// test