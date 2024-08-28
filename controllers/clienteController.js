const Cliente = require('../models/Cliente');

// Funcion agregar clientes BD

exports.agregarClientes = async(req, res)=>{
    try {

        let clientes;
        clientes = new Cliente(req.body)
        await clientes.save();
        res.json(clientes);


    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un cliente')
    }
}


// Funcion Buscar Clientes
exports.mostrarClientes = async(req, res) =>{
    try {
         
        const clientes = await Cliente.find();
        res.json(clientes)

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al Mostrar los Clientes');
    }
}

// Buscar un Cliente
exports.buscarClientes = async (req, res) =>{
    try {
        
        const clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg:"El cliente no se encuentra por ID"});     
        }else{
            res.json(clientes);
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un Cliente');
    }
}



// Funcion Modificar Clientes con el Metodo Put
exports.modificarClientes = async (req, res) =>{
    try {
        
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        if(!clientes){
            res.status(404).send("Cliente no Encontrado")
        }else {
            res.json(clientes);
        }    


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al Editar un Cliente');
    }
}
// Funcion Editar Utilizando Patch

exports.editarClientes = async (req, res) =>{
    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!clientes){
            return res.status(404).send("El Cliente No Existe......");
        }
        res.json(clientes);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un Error al Editar un Cliente');
    }
}

exports.eliminarClientes = async(req, res) =>{
    try {
        const clientes = await Cliente.findById({_id: req.params.id});
        if(!clientes){
            res.status(404).send("El Cliente no Existe");
            return
        }
        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El Cliente Fue Eliminado con Exito"});
        return

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un Error al Eliminar un Cliente');
    }
}