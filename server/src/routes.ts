import { Router } from "express";
import { GetAllFoodController } from "./controllers/GetAllFoodController";
import { PostFoodController } from "./controllers/PostFoodController";

const GetAllFood = new GetAllFoodController;
const PostFood = new PostFoodController;

const routes = Router();

routes.get("/food",GetAllFood.execute);
routes.post("/food",PostFood.execute);

export {routes}