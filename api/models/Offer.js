const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  crop: String,
  price: Number,
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  status: { type: String, enum: ['pending', 'accepted'], default: 'pending' }
});

module.exports = mongoose.model('Offer', offerSchema);
