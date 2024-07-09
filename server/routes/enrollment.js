const express = require('express');
const Enrollment = require('../models/Enrollment');
const router = express.Router();

// Enroll a student
router.post('/enroll', async (req, res) => {
  const { studentId, subject, teacherId } = req.body;
  try {
    const enrollment = new Enrollment({
      student: studentId,
      subject,
      teacher: teacherId
    });
    await enrollment.save();
    res.json(enrollment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Other enrollment routes...

module.exports = router;
