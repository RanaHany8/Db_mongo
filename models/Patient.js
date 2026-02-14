const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    phone: String,
    dateOfBirth: Date
}, { timestamps: true });

module.exports = mongoose.model('Patient', PatientSchema);