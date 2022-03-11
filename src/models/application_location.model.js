const mongoose = require('mongoose');

const applicationLocationSchema = mongoose.Schema({
    
    received_from: {
        type: BigInt
    },
    current: {
        type: BigInt
    },
    sent_to: {
        type: BigInt
    }
})

const ApplicationLocation = mongoose.model('Application', applicationLocationSchema);

module.exports = ApplicationLocation;