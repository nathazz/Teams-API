import conexao from "../database/db.js"

class SelcRepository {

    //CRUD
    create(selecao){

        //inserir configuração em selecao
        const sql = "INSERT INTO selecoes SET ?;"
        return new Promise((resolve, reject) => {

            conexao.query(sql, selecao, (error, result) => {
                if(error) return reject(`erro: ${error}`)
                return resolve(result)
          })
      })
    }


    findALL() {
                     //selecionar toda a tabela 
        const sql = "SELECT * FROM selecoes;" 
       
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, result) => {

             if(error) return reject(`erro: ${error}`)
              return resolve(result)

            })
        })
    }


    findById(id) {
                    //buscar tabela selecao com base no id
        const sql = "SELECT * FROM selecoes WHERE id=?;"

        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                let linha = result[0]
                if(error) return reject(`error: ${error}`)
                return resolve(linha)
            })
        })
     }


    uptade(selecao, id){
        
                    //atualizando a tabela selecao com base no id
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, id], (error, result) => {
                if(error) return reject(`error: ${error}`)
                return resolve(result)       
             })
         })
     }
    

    delete(id){

                    //deletar a tabela com base no id
        const sql = "DELETE FROM selecoes WHERE id=?;"

        return new Promise((resolve, reject) => {
            conexao.query(sql,id, (error, result) => {
                if(error) return reject(`error: ${error}`)
                return resolve(result)       
             })
         })
    }
}

export default new SelcRepository()