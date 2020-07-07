const { Router } = require('express');
const router = Router();
const _ = require('underscore')

const autos = require('../autos.json');

//mostrar u obtener
router.get('/',(req,res) => {
    res.json(autos);
})

//mostrar u obtener
router.get('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(autos, (auto, i) => {
            if (auto.id == id) {
                res.json(auto);
            }
        });
    }
});

//ingresar por post
router.post('/', (req, res) => {
    const {marca,modelo}=req.body;
    if(marca && modelo){
        const id = autos.length + 1;
        const newAuto = {id, ...req.body};
        console.log(newAuto);
        autos.push(newAuto);
        res.json(autos);
    }else{
        res.send('Error')
    }
})

//actualizar
router.put('/:id', (req,res)=>{
    const {id}=req.params;
    const {marca,modelo}=req.body;
    if(marca && modelo){
        _.each(autos,(auto,i)=>{
            if(auto.id==id){
                auto.marca = marca;
                auto.modelo = modelo;
            }
        });
        res.json(autos);
    }else{
        res.status(500).json({error: 'Faltan campos'})
    }
})

//borrar
router.delete('/:id',(req,res) =>{
    const{ id }= req.params;
    _.each(autos,(auto,i)=>{
        if(auto.id==id){
            autos.splice(i,1);
        }
    });
    res.send(autos);
})

module.exports = router;