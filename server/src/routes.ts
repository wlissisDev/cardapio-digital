import { Router } from "express";
import { GetAllFoodController } from "./controllers/GetAllFoodController";

const GetAllFood = new GetAllFoodController();

const routes = Router();

routes.get("/food",GetAllFood.execute);


export {routes}