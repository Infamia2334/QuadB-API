const multer = require("multer");

const imageValidator = (req, file, next) => {
  if (file.mimetype.startsWith("image")) {
    next(null, true);
  } else {
    next("Please Upload only images", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, __basedir + "/resources");
  },
  filename: (req, file, next) => {
    next(null, `${Date.now()}_${file.originalname}`);
  },
});

var uploadFile = multer({
  storage,
  fileFilter: imageValidator,
});

module.exports = uploadFile;
