import express from "express";
import { createUser, deleteUser, readUser, updateUser } from "../controllers/userController.js"

const userRouter = express.Router()

//Crear
//Post
userRouter.post("/", (req, res) =>{
    createUser(req, res)
})

//Leer
//Get
userRouter.get("/", (req, res) =>{
    readUser(req, res)
})

//Actualizar
//Put
userRouter.put("/", (req, res) =>{
    updateUser(req, res)
})
//Eliminar
//Delete
userRouter.delete("/", (req, res) =>{
    deleteUser(req, res)
})

export default userRouter;