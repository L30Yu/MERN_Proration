const {Router} = require('express');
const { postProration } = require('../controllers/ProrationController');

const router = Router()

router.post('/', postProration)

module.exports = router;