import { Router } from "express";
import { GetAllFoodController } from "./controllers/GetAllFoodController";
import { PostFoodController } from "./controllers/PostFoodController";
import { UpdateFoodController } from "./controllers/UpdateFoodController";
import { DeleteFoodController } from "./controllers/DeleteFoodController";
import {GetOneFoodController} from './controllers/GetOneFoodController'

const GetAllFood = new GetAllFoodController();
const PostFood = new PostFoodController();
const UpdateFood=new UpdateFoodController();
const DeleteFood=new DeleteFoodController();
const GetOndeFood = new GetOneFoodController();

const routes = Router();

routes.get("/food",GetAllFood.execute);
routes.get("/food/:id",GetOndeFood.execute);
routes.post("/food",PostFood.execute);
routes.put("/food/:id",UpdateFood.execute);
routes.delete("/food/:id",DeleteFood.execute);

export {routes}