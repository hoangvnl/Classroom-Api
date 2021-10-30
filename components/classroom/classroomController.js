const classroomService = require("./classroomService");

exports.getAllClassroom = async (req, res, next) => {
  try {
    const { rows } = await classroomService.getAll();
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({
      message: "Get all classroom unsuccessfully",
      err,
    });
  }
};

exports.addClassroom = async (req, res, next) => {
  const name = req.body.name;
  try {
    await classroomService.add(name);
    res.status(201).json({
      message: "Task created successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Get all classroom unsuccessfully",
      err,
    });
  }
};
