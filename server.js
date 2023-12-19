import app from "./src/app.js"

const Port = 3000 //Porta do site

//escutando a porta
app.listen(Port, () =>{
    console.log(`Servidor rodando no endereço http://localhost:${Port} `)
})

        
    
