import { Router } from "express"
import { readFile, writeFile } from 'fs/promises'

//solicitudes con el método GET para consultar datos.

const fileProductos = await readFile('./Productos.json', 'utf-8')
const prodData = JSON.parse(fileProductos)

const  router = Router()

router.get('/:nombre', (req, res)=>{
    const nombre = req.params.nombre
    const result = prodData.find(e => e.nombre === nombre)

    if(result){
        res.status(200).json(result)
    }else{
        res.status(400).json(`${nombre} no se encuentra`)
    }
})


//solicitudes con el método POST para consultar datos.

router.post('/Precio',(req,res)=>{
    const name = req.body.nombre

    const result = prodData.find(e => e.nombre === name)
    if(result){
        res.status(200).json(`El Precio de $ ${result.precio}`)
    }else{
        res.status(400).json(`${name} no existe`)
    }
})

//solicitudes con el método PUT para consultar datos.

router.put('/precio/update/:userID', (req,res)=>{
    const id = req.params.userID
    const newprice = req.body.precio

    try{
        const index = prodData.findIndex(e => e.id == id)
        if(index != -1){
            prodData[index].precio = newprice
            writeFile('./Productos.json', JSON.stringify(prodData,null,2))
            res.status(200).json('El Precio se Actualizo Correctamente')
        }else{
            res.status(400).json('El Precio no se pudo actualizar')
        }
    }catch(error){
        res.send(500).json('Error en los datos')    
    }
})

//solicitudes con el método GET para consultar datos.

router.delete('/precio/delete/:userID', (req,res)=>{
    const id = req.params.userID

    try{
        const index = prodData.findIndex(e => e.id == id)
        if(index != -1){
            prodData.splice(index,1)
            writeFile('./Productos.json', JSON.stringify(prodData,null,2))
            res.status(200).json('El Producto se elimino Correctamente')
        }else{
            res.status(400).json('El Producto no se pudo Eliminar')
        }
    }catch(error){
        res.send(500).json('Error en los datos')    
    }
})

//Para crear un Producto

 router.post('/Create', (req, res)=>{
    const prod = req.body.newprod
    prodData.push(prod)
    writeFile('./Productos.json', JSON.stringify(prodData,null,2))
    res.status(200).json('El Producto se Creo Correctamente')
})

export default router