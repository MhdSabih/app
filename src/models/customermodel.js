const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name: String,
    phone: Number
});

const customer = new mongoose.model('customer', customerSchema);

const customerIdentifier = mongoose.Schema({
    customerCode: String,
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    }
});
const identifier = new mongoose.model('identifier', customerIdentifier);

module.exports = {
    customer,
    identifier
}
