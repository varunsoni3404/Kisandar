const mongoose = require('mongoose');

const vendorOfferSchema = new mongoose.Schema({
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    crop: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    additionalDetails: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'accepted'], default: 'pending' } 
});


module.exports = mongoose.model('VendorOffer', vendorOfferSchema);
