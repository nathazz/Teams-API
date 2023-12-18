import SelcRepository from "../repositories/SelcRepository.js"

class SelecaoController{

     async index (req, res) {
      const row = await SelcRepository.findALL()
      res.json(row)

 }

     async showID (req,res) {
      const id = req.params.id
      const row = await SelcRepository.findById(id)
      res.json(row)
 }
    
    async store(req, res){
      const selecao = req.body
      const row = await SelcRepository.create(selecao)
      res.status(201).json(row)    
 }

   async uptade(req,res){
      const id = req.params.id
      const selecao = req.body
      const row = await SelcRepository.uptade(selecao, id)
      res.json(row)

    }

    async delete(req,res){
      const id = req.params.id
      const row = await SelcRepository.delete(id)
      res.json(row)
  }

}

//padrão Singleton
export default new SelecaoController()