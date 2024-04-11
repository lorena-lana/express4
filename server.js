const express = require ('express');
const mysql = require ('mysql2');

const app = express();

app.listen(3000,()=>{
    console.log("você só se fode sua otaria")

})


const connection =mysql.createConnection({
    host: 'localhost',
    user: 'user_bd_tasks',
    password: 'QL0P4TDcQGB2R97Djet7vXYHggatTZE4'
})
