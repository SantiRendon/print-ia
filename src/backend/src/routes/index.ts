import { Router } from "express";
import { readdirSync } from "fs"
import { logMiddleware } from "../middlewares/log";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
    // console.log(fileName);
    const cleanName = cleanFileName(fileName);

    if (cleanName !== "index") {
        import(`./${cleanName}.routes`).then((moduleRouter) => {
            console.log(`Ruta /${cleanName} cargada`)
            router.use(`/${cleanName}`, logMiddleware,moduleRouter.router);
        });
        // console.log(cleanName);
    }
});

export {router};