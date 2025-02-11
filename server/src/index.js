const express = require("express");
const userRouter = require("./routes/users.routes");
const app = express();
const port = 3000;
const cors = require("cors");

const corsOptions = {
  origin: "*", // Orígenes permitidos
  methods: ["GET", "POST", "PATCH", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Headers permitidos
  credentials: true, // Habilitar cookies/credenciales
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", userRouter);

app.listen(port, () => {
  console.log("Server is running on port" + port);
});
