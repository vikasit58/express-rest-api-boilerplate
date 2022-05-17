const mongoose = require('mongoose');

// Inventory Schema
const InventorySchema = mongoose.Schema({
  lid: String,
  status: {
    type: String,
    default: 'draft'
  },
  category: String,
  dealer_id: Number,
  dealer_name: String,
  dealer_phone: String,
  user_id: String,
  city:String,
  registration_number: String,
  make: String,
  model: String,
  year: String,
  trim: String,
  kms_driven: Number,
  chassis_number: String,
  total_price: Number,
  fuel_type: String,
  vehicle_type: String,
  photos:[{
      original: String,
      photo_id: String,
      primary_photo: Boolean
  }],
  crop_pending: Number,
  created_at:Date,
  updated_at:Date
});

const Inventory = module.exports = mongoose.model('Inventory', InventorySchema);