import { Request, Response } from "express";
import { prismaClient } from "../util/PrismaClient";

class PostFoodController {
    async execute(request: Request, response: Response) {
        const { name, url, price } = request.body;
        
        if (name == null || url === null || price === null) {
            return response.end("dados invalidos");
        }

        const foods = await prismaClient.food.create({
            data:{
                name:name,
                price:price,
                url:url
            }
        });
        return response.json(foods).sendStatus(201);
    }
}

export { PostFoodController }