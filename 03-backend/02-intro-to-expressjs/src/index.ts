import express from "express";
import todosRoutes from "./routes/todos.route.js";

const PORT: number = 8080;

const server = express();

server.use(express.json()); // Middleware agar request body bisa dibaca oleh Express.js

/* ---------------------------- Health Endpoints ---------------------------- */
server.get("/health", (request, response) => {
  response.status(200).json("API is running and okay!");
});

/* ----------------------------- Todos Endpoints ---------------------------- */
server.use("/todos", todosRoutes);

server.listen(PORT, () => {
  console.info(`Application run on port: ${PORT}`);
});

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
/*
https://yourdomain.com/parameter1/parameter2?query1=value&query2=value
http://localhost:8000/parameter1/parameter2?query1=value&query2=value

[PROTOCOL]://[DOMAIN]/[PARAMS1]/[PARAMS2]?[QUERY_NAME1]=[VALUE_QUERY1]

PARAMS = request.params.[PARAMS_NAME]
QUERY = request.query.[QUERY_NAME]
*/
