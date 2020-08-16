const express = require('express');
const router = express.Router();

const mutants = require('../controllers/mutants');
const stats = require('../controllers/stats');

/* routes */

router.post('/mutant/', mutants.mutant);
router.get('/stats/', stats.stats);

module.exports = {
    router
}