import express from "express";
import pg from "pg";

const app = express();
const PORT = 8000;

const Pool = pg.Pool;
const pool = new Pool({
  connectionString:
    "postgresql://postgres.bngltrjnimtexpatprbm:newpass@aws-1-us-east-2.pooler.supabase.com:6543/postgres",
  ssl: { rejectUnauthorized: false },
});

pool
  .connect()
  .then(() => console.log("Connected to Supabase PostgreSQL"))
  .catch((err) => console.error("Connection error:", err));

app.get("/admins", async (request, response) => {
  const result = await pool.query("SELECT * FROM admins ORDER BY id ASC");
  response.status(200).json(result.rows);
});

app.listen(PORT, () => console.info(`Server is listening on port: ${PORT}`));
