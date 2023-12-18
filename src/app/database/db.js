import mysql from 'mysql2';


//conexao ao mysql
const conexao = mysql.createConnection({

    host: 'localhost',
    port:'3306',
    user:'root',
    password:'luceli2019',
    database: 'db_copa' 
    
})

conexao.connect()


export default conexao