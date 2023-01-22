import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import loggger from '../utils/logger'

export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response
) {
    try {
        const user = await createUser(req.body);
        return res.send(user);
    } catch (e: any) {
        loggger.error(e);
        return res.status(409).send(e.message);
    }

}