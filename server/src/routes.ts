import { Router } from "express";
import { GetAllFoodController } from "./controllers/GetAllFoodController";
import { PostFoodController } from "./controllers/PostFoodController";
import { UpdateFoodController } from "./controllers/UpdateFoodController";

const GetAllFood = new GetAllFoodController();
const PostFood = new PostFoodController();
const UpdateFood=new UpdateFoodController();

const routes = Router();

routes.get("/food",GetAllFood.execute);
routes.post("/food",PostFood.execute);
routes.put("/food/:id",UpdateFood.execute);

export {routes}