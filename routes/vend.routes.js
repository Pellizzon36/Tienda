import { Router } from "express"
import { readFile, writeFile } from 'fs/promises'

const fileVendedores = await readFile('./Vendedores.json', 'utf-8')
const vendData = JSON.parse(fileVendedores)

const  router = Router()

//solicitudes con el método GET para consultar datos.

router.get('/:id', (req, res)=>{
    const VendID = req.params.id
    const result = vendData.find(e => e.id == VendID)

    if(result){
        res.status(200).json(result)
    }else{
        res.status(400).json(`${VendID} no se encuentra`)
    }
})

//solicitudes con el método POST para consultar datos.

router.post('/nombre',(req,res)=>{
    const nomID = req.body.id

    const result = vendData.find(e => e.id == nomID)
    if(result){
        res.status(200).json(`El el nombre es ${result.nombre} ${result.apellido}`)
    }else{
        res.status(400).json(`${nomID} no existe`)
    }
})
//POST para Crear Vendedor

router.post('/CrearVend', (req, res)=>{
    const vend = req.body.newvend
    vendData.push(vend)
    writeFile('./Vendedores.json', JSON.stringify(vendData,null,2))
    res.status(200).json('El Vendedor se Creo Correctamente')
})  


export default router