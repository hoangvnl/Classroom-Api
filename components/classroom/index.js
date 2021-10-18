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
  const { rows } = await pool.query("select * from classes");
  res.status(200).json(rows);
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  await pool.query(`insert into classes ( name) values ('${req.body.name}');`);
  res.status(201).json({
    message: "Task created successfully",
  });
});

module.exports = router;
