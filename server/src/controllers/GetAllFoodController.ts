import { Request, Response } from "express";
import { prismaClient } from "../util/PrismaClient";

class GetAllFoodController {
    async execute(request:Request, response:Response){
        const foods = await prismaClient.food.findMany();
        return response.json(foods).sendStatus(200);
    }    
}

export {GetAllFoodController}