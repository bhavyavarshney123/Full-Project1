const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/Student');
const router = express.Router();

// Student login
router.post('/login', async (req, res) => {
  const { uniRollNo, password } = req.body;
  try {
    const student = await Student.findOne({ uniRollNo });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: student._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token, student });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Other student routes...

module.exports = router;
