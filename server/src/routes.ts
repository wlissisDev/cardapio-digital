import { Router, Response, Request } from "express";

const routes = Router();

routes.get("/food",(request:Request, response:Response)=>{
    return response.end("ola")
})


export {routes}