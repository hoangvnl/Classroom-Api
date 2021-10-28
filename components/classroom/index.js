const express = require("express");
const router = express.Router();

const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "classroom",
  password: "1234",
  port: 5432,
});

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await pool.query("select * from classes");
    res.status(200).json(rows);
  } catch (err) {
    res.json(err);
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
    res.json(err);
  }
});

module.exports = router;
