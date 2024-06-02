import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import profileRoutes from "./route/profile_route";
import headerMiddleware from "./middleware/header_middleware";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(headerMiddleware(process.env.HEADER_VALUE || ""));

app.get("/", (req: Request, res: Response) => {
  res.send("Test Server");
});

profileRoutes(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
