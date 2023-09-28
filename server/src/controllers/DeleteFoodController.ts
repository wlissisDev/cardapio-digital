import { Request, Response } from "express";
import { prismaClient } from "../util/PrismaClient";

class DeleteFoodController {
    async execute(request: Request, response: Response) {
        const { id } = request.params;

        const existedFood = await prismaClient.food.findFirst({
            where: {
                id: id
            }
        });

        if (!existedFood) {
            return response.status(400).json(("elemento nao existe"));
        }

    
        await prismaClient.food.delete({where: { id }});

        return response.status(200).json("deleted");

    }
}


export { DeleteFoodController }