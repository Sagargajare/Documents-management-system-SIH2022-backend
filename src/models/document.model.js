const mongoose = require('mongoose');
var uuid = require('uuid');

const documentSchema = mongoose.Schema({
    id : {
        type: Number,
        required: true
    }, 
    uuidv1 : {
        type: String,
        default: function genUUID(){
            uuid.v1()
        }
    },
    type : {
        type:String
    },
    uploaded_by : {
        type: BigInt,
        required : true,
    },
    note : {
        type: String
    },
    
});


const Document = mongoose.model('Document', documentSchema);
module.exports = Document;