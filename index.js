import express from 'express'
import dotenv from 'dotenv'
import prodRouter from  './routes/prod.routes.js'
import vendRouter from  './routes/vend.routes.js'
import ventasRouter from  './routes/ventas.routes.js'
import connection from './connection.js'

//Traer variable de entornos
dotenv.config()

//Crear Instancia
const app = express()

app.use(express.json());

//Configurar Puerto
const port = process.env.port
//Levantar Servidor
app.listen(port, () =>{
    console.log(`Servidor Levantado en el Puerto ${port}`)
    
    //altgr + } Hace las Comillas `
})

app.use('/prod', prodRouter)
app.use('/vend', vendRouter)
app.use('/ventas', ventasRouter)

//SQL

app.get('/', (req, res)=>{
    const query = `SELECT * FROM vendedores`

    connection.query(query, (error, result)=>{
        if(error){
            console.log('Error al ejecutar la query', error)
            res.status(500).send('Error al ejecutar query')
        }else{
            res.status(200).json(result)
        }
    })
})




