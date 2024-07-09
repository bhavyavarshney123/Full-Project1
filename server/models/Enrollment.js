const mongoose = require('mongoose');
const EnrollmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  subject: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Enrollment', EnrollmentSchema);
