import { Router } from "express";
import SelecaoController from './app/controllers/SelecaoController.js'

const router = Router()



//create
router.post("/selecoes", SelecaoController.store)

//read / rotas
router.get("/selecoes", SelecaoController.index)
router.get("/selecoes/:id", SelecaoController.showID)

//uptade
router.put("/selecoes/:id", SelecaoController.uptade)

//delete
router.delete("/selecoes/:id", SelecaoController.delete)

export default router