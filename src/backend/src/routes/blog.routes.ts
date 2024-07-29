import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json({ "msg": "Ruta Blog" })
});

export {router};