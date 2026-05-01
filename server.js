// import { createClient } from "redis";

// const client = await createClient({
//   url: "redis://localhost:6789",
// })
//   .on("error", (err) => console.log("Redis Client Error", err))
//   .connect();

// await client.set("key", "qiymat");
// const value = await client.get("key");
// console.log(value);

// client.destroy();
import express from "express";
import pool from "./config/db.js";
const app = express();
app.get("/", (req, res) => {
  res.send("salom");
});
app.get("/date", async (req, res) => {
  const date = (await pool.query("select current_date;")).rows[0];
  res.status(200).json({
    date: date,
  });
});
app.listen(3000, () => {
  console.log("Server is  running");
});
