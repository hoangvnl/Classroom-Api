const express = require("express");
const router = express.Router();
const classroomController = require("./classroomController");

router.get("/", classroomController.getAllClassroom);

router.post("/", classroomController.addClassroom);

module.exports = router;
