const mongoose = require ('mongoose');

// El modelo que hacemos aca es el que vamos a montar en postman

const proveedorSchema = mongoose.Schema({
    nitproveedor:{
        type: Number,
        required: true
    },
    razonsocial:{
        type: String,
        required: true
    },
    fechacreacion:{
        type: Date,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    contacto:{
        type: Number,
        required: true
    },
    direccion:{
        type:String,
        required:true
    }
},{versionkey:false});

module.exports = mongoose.model('Proveedor', proveedorSchema)