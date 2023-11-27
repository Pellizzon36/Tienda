import { Router } from "express"
import { readFile, writeFile } from 'fs/promises'

const fileVentas = await readFile('./Ventas.json', 'utf-8')
const ventasData = JSON.parse(fileVentas)

const  router = Router()

//solicitudes con el método GET para consultar datos por filtro.

router.get('/byVentas/:from/:to', (req, res)=>{
    const from = req.params.from
    const to = req.params.to

    const result = ventasData.filter(e => e.date > from && e.date < to)

    if(result){
        res.status(200).json(result)
    }else{
        res.status(400).json(`No hay ventas entre $(from) y $(to)`)
    }
})

export default router