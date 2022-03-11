const mongoose = require('mongoose');

const remarkSchema = mongoose.Schema({
    id : {
        type: BigInt, 
        required: true
    },
    remark_by : {
        type: BigInt,
        required: true
    },
    remark : {
        type: String,
        required : true
    },

});

const Remark = mongoose.model('Remark', remarkSchema);
module.exports = Remark;
