const Proveedors = require('../models/Proveedors');

// Funcion agregar proveedores BD

exports.agregarProveedores = async(req, res)=>{
    try {

        let proveedores;
        proveedores = new Proveedors(req.body)
        await proveedores.save();
        res.json(proveedores);


    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un Proveedor')
    }
}


// Funcion Buscar Proveedores
exports.mostrarProveedores = async(req, res) =>{
    try {
         
        const proveedores = await Proveedors.find();
        res.json(proveedores)

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al Mostrar un Proveedor');
    }
}

// Buscar un proveedores
exports.buscarProveedores = async (req, res) =>{
    try {
        
        const proveedores = await Proveedors.findById(req.params.id);
        if(!proveedores){
            res.status(404).send({msg:"El Proveedor no se encuentra por ID"});     
        }else{
            res.json(proveedores);
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un proveedores');
    }
}



// Funcion Modificar Proveedores con el Metodo Put
exports.modificarProveedores = async (req, res) =>{
    try {
        
        const proveedores = await Proveedors.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        if(!proveedores){
            res.status(404).send("proveedors no Encontrado")
        }else {
            res.json(proveedores);
        }    


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al Editar un proveedors');
    }
}
// Funcion Editar Utilizando Patch

exports.editarProveedores = async (req, res) =>{
    try {
        const proveedores = await Proveedors.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!proveedores){
            return res.status(404).send("El proveedors No Existe......");
        }
        res.json(proveedores);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un Error al Editar un proveedors');
    }
}

exports.eliminarProveedores = async(req, res) =>{
    try {
        const proveedores = await Proveedors.findById({_id: req.params.id});
        if(!proveedores){
            res.status(404).send("El Proveedor no Existe");
            return
        }
        await Proveedors.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El Proveedor Fue Eliminado con Exito"});
        return

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un Error al Eliminar un Proveedor');
    }
}