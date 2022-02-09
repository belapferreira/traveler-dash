const express = require("express");
const multer = require("multer");
const cors = require("cors");

const server = express();

server.use(cors());

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, "../frontend/public/images");
  },

  filename: (request, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage }).array("files");

server.post("/upload", (request, response) => {
  upload(request, response, (error) => {
    if (error) {
      return response.status(500).json(error);
    }

    return response.status(200).send(request.files);
  });
});

// npx nodemon server.js
const port = 3002;
server.listen(port, () => {
  console.log(
    `Server is running! 🤖
    Acesse em http://localhost:${port}`
  );
});
