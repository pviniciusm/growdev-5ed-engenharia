import { NextFunction, Request, Response } from "express";

export const logRequest = function (req: Request, res: Response, next: NextFunction){
    console.log({"Method": req.method, "URL": req.originalUrl, "Body": req.body});
    next();
}