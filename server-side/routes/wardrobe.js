const router = require('express').Router();
const wardrobeController = require("../controllers/wardrobeController");

router.post("/upload-image", wardrobeController.uploadImage);

module.exports = router;