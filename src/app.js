import express from 'express' //import do express pra minha pagina

const app = express() //instancia do express

//indicar para o express ler body com json
app.use(express.json())

//req = request
//res = response

//Create - post
//Read - get
//Uptade - Put
//Delete - Delete

//enviar uma resposta
app.get("/", (req, res) =>{
  res.status(200).send('Hello word!')
})

//mock
const selecoes = [
    {id:1, selecao:'Brasil', grupo:'G'},
    {id:2, selecao:'Suiça', grupo:'G'},
    {id:3, selecao:'Argentina', grupo:'G'},
    {id:4, selecao:'Espanha', grupo:'G'}
]


app.get("/selecoes", (req, res) =>{
    res.status(200).send(selecoes)
})

app.post("/selecoes", (req, res) =>{
    selecoes.push(req.body)
    res.status(201).send("Seleção cadastrada com sucesso")
})


export default app

//precisamos escutar essa porta "3000"
