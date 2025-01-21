import express from "express";
import cors from "cors";
import router  from "./routes/test.js";

const app = express();
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); // Body limit is 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Body limit is 16kb
app.use(express.static("public")); // Serve static files from the "public" folder

app.use("/beta/test", router);

export { app };
