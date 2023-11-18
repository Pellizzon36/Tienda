import mysql from 'mysql'

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tienda'
    }
)
connection.connect((error)=>{
    if(error){
        console.log('Error al conectar a la base de datos')
        return
    }
    console.log('conectado a la base de datos')
})

export default connection