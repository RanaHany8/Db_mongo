const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    specialtyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialty', required: true },
    bio: String,
    phone: String,
  
}, { timestamps: true });

module.exports = mongoose.model('Doctor', DoctorSchema);