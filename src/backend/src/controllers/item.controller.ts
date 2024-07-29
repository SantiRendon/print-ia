import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service";

const getItems = async (req: Request, res: Response) => {
    try {
        let response = await getCars();
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS")
    }
}

const getItem = async ({params}: Request, res: Response) => {
    try {
        let {id} = params;
        let response = await getCar(id);
        res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEM")
    }
}

const insertItem = async ({ body }: Request, res: Response) => {
    try {
        // res.send(body)
        let responseItem = await insertCar(body);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, "ERROR_INSERT_ITEMS")
    }
}

const updateItem = async ({body, params}: Request, res: Response) => {
    try {
        let {id} = params;
        let responseItem = await updateCar(id,body);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_ITEMS")
    }
}

const deleteItem = async ({params}: Request, res: Response) => {
    try {
        let {id} = params;
        let responseItem = await deleteCar(id);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_ITEMS")
    }
}

export { getItems, getItem, insertItem, updateItem, deleteItem }