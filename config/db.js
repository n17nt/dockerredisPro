import { Pool } from "pg";
const pool = new Pool({
  host: "postgres",
  password: "1234",
  port: 5432,
  user: "postgres",
  database: "docker_db",
});
export default pool;
