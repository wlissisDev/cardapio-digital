import { Request, Response } from "express";
import { prismaClient } from "../util/PrismaClient";

class GetOneFoodController {
    async execute(request: Request, response: Response) {
        const { id } = request.params

        const food = await prismaClient.food.findFirst({
            where: { id }
        })

        if(!food){
            return response.sendStatus(400);
        }

        return response.json(food);
    }
}

export {GetOneFoodController}