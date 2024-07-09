const express = require('express');
const Exam = require('../models/Exam');
const router = express.Router();

// Set exam
router.post('/set', async (req, res) => {
  const { department, course, subject, nameOfExam, semesterNo, questions } = req.body;
  try {
    const exam = new Exam({
      department,
      course,
      subject,
      nameOfExam,
      semesterNo,
      questions
    });
    await exam.save();
    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Other exam routes...

module.exports = router;
