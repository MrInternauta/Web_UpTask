const express =  require("express");
const router = express.Router();
const proyectosController  = require("../controllers/proyectosController");
const productos = [
    {
        producto: "Libro",
        precio: 30        
    },
    {
        producto: "Curso",
        precio : 0
    }
]

module.exports =  function () {
    router.get('/', proyectosController.proyectosController )
    
    router.get('/nosotros', (req, res)=>{
        res.render('nosotros');
    })
    return router
}
