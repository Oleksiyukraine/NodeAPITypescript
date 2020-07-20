import httpStatus from "http-status";
import pingModule from "pingman";
import { Request, Response, NextFunction } from "express";

export const ping = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await pingModule("www.google.com");
        res.send({ status: httpStatus.OK, pong: response });
    } catch (e) {
        console.log("ping Error", e);
        next(e);
    }
};
