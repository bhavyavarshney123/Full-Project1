const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher');
const router = express.Router();

// Teacher login
router.post('/login', async (req, res) => {
  const { facultyID, password } = req.body;
  try {
    const teacher = await Teacher.findOne({ facultyID });
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: teacher._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token, teacher });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Other teacher routes...

module.exports = router;
