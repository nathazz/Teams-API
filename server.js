import app from "./src/app.js"

const Port = 3000 //Porta do site

//fazer a conexao
app.listen(Port, () =>{
    console.log(`Servidor rodando no endereço http://localhost:${Port} `)
})

        
    
