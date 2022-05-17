const menu = [
    {
        id: 1,
        nombre: "Carpaccio fresco",
        descripcion: "Entrada Carpaccio de salmón con cítricos",
        precio: "U$S 65.50",
        imagen: "Carpaccio-de-salmon.jpg"
    },
    {
        id: 2,
        nombre: "Risotto de berenjena",
        descripcion: "Risotto de berenjena y queso de cabra",
        precio: "U$S 47.00",
        imagen: 'Risotto-berenjena-queso-cabra.jpg'
    },
    {
        id: 3,
        nombre: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar",
        precio: "U$S 27.50",
        imagen: 'Mousse-de-arroz-con-leche.jpg'
    },
    {
        id: 4,
        nombre: "Espárragos blancos",
        descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio: "U$S 37.50",
        imagen: 'esparragos.png'
    },
]

const mainController = {
    index: (req, res) => {
        res.render('index', {menuMostrar: menu})
    },
    id: (req, res) => {
        let idPlato = req.params.id;
        let platoAMostrar = menu.find(function(plato){
            return plato.id == idPlato;
        })
        // Puede ser asi tambien
        // let platoAMostrar = menu.find(plato => plato.id == idPlato)
        res.render('detallePlato', {detallePlato: platoAMostrar})
    }
}

module.exports = mainController;
// usuarioUnico: (req, res) => {
//     let idUsuario = req.params.idUsuario;
   
//     let usuarioMostrar = usuarios.find(function(usuario){
//         return usuario.id == idUsuario;
//     })
//     res.render('usuario', {unicoUsuario: usuarioMostrar})
   