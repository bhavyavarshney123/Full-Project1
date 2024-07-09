const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
  name: String,
  uniRollNo: { type: String, unique: true },
  password: String,
  address: String,
  contact: String,
  fatherName: String,
  fatherPhone: String,
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Enrollment' }]
});
module.exports = mongoose.model('Student', StudentSchema);
