import { Request, Response } from "express";
import { prismaClient } from "../util/PrismaClient";

class UpdateFoodController {
    async execute(request: Request, response: Response) {
        const { id } = request.params;
        const { name, url, price } = request.body;

        const existedFood = await prismaClient.food.findFirst({
            where: {
                id: id
            }
        });

        if (!existedFood) {
            return response.status(400).json(("elemento nao existe"));
        }

        if (name == null || url === null || price === null) {
            return response.end("dados invalidos");
        }

        await prismaClient.food.update({
            where: { id },
            data: { name, url, price }
        })

        return response.status(200).json("update")

    }
}


export { UpdateFoodController }