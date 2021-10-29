const express = require("express");
const router = express.Router();

const { Pool } = require("pg");
const pool = new Pool({
  user: "ibrsfpixxqekcm",
  host: "ec2-35-169-204-98.compute-1.amazonaws.com",
  database: "d4alf9m85cjslp",
  password: "dfc83b5ce545ac073d1402acce404c635e709d9fef4a6cb2d43e7fb3b2f317a3",
  port: 5432,
});

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await pool.query("select * from classes");
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await pool.query(
      `insert into classes ( name) values ('${req.body.name}');`
    );
    res.status(201).json({
      message: "Task created successfully",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
