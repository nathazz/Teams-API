import express from 'express' 
import SelecaoController from './app/controllers/SelecaoController.js'
const app = express() 


//indicar para o express ler body com json
app.use(express.json())

//create
app.post("/selecoes", SelecaoController.store)

//read / rotas
app.get("/selecoes", SelecaoController.index)
app.get("/selecoes/:id", SelecaoController.showID)

//uptade
app.put("/selecoes/:id", SelecaoController.uptade)

//delete
app.delete("/selecoes/:id", SelecaoController.delete)

export default app
