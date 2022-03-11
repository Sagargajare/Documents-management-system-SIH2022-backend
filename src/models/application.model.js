const mongoose = require('mongoose');
var uuid = require('node-uuid');

const applicationSchema = mongoose.Schema({
    id: {
        type: String,
        default: function genUUID(){
            return uuid.v1()
        }
    },
    status: {
        type: Enumerator
    },
    initiated_by: {
        type: BigInt
    },
    application_type: {
        type: Enumerator
    },
    data: {
        type: JSON
    },
    date_time: {
        type: Date
    }
})

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;