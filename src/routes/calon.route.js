const express = require("express");
const router = express.Router();
const route = require('../controllers/calon.controller');
const multer = require("multer");
const path = require("path");

// menentukan lokasi pengunggahan
const diskStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../../public/uploads"));
    },
    filename: function(req, file, cb) {
        cb(
            null,
            "photo" + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({
    storage: diskStorage,
    fileFilter: function(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
            req.fileValidationError = 'Only .jpg / .jpeg, and .png are allowed';
            return cb(new Error('Only .jpg / .jpeg, and .png are allowed'));
        }
        cb(null, true)
    }
}).single("path");

router.get('/', route.getCalonList);
router.get('/:id', route.getCalonByID);
router.delete('/:id', route.deleteCalon);
router.post('/', route.createNewCalon);
router.put('/:id', route.updateCalon);

module.exports = router;