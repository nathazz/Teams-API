import app from "./src/app.js"

//type:module é obrigatório para o server

const Port = 3000 //Porta do site

app.listen(Port, () =>{
    console.log(`Servidor rodando no endereço http://localhost:${Port}`)
})

