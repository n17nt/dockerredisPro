import { Pool } from "pg";
const pool = new Pool({
  host: "db",
  password: 1234,
  port: 5434,
  user: "postgres",
  database: "docker_db",
});
export default pool;
