const express = require('express');
const router = express.Router();
const { search } = require('../controllers/searchController');
const { protect } = require('../middleware/authMiddleware');

// ✅ Change from GET to POST
router.post('/', protect, search);

module.exports = router;
