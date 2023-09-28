import { Router } from "express";
import { GetAllFoodController } from "./controllers/GetAllFoodController";
import { PostFoodController } from "./controllers/PostFoodController";
import { UpdateFoodController } from "./controllers/UpdateFoodController";
import { DeleteFoodController } from "./controllers/DeleteFoodController";

const GetAllFood = new GetAllFoodController();
const PostFood = new PostFoodController();
const UpdateFood=new UpdateFoodController();
const DeleteFood=new DeleteFoodController();

const routes = Router();

routes.get("/food",GetAllFood.execute);
routes.post("/food",PostFood.execute);
routes.put("/food/:id",UpdateFood.execute);
routes.delete("/food/:id",DeleteFood.execute);

export {routes}