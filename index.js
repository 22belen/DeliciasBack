const express = require("express");
const app = express();
const { sequelize, Usuario, Producto } = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

sequelize.sync({}).then(() => {
  console.log("Tablas sincronizadas correctamente.");
});

app.listen(8000, console.log("https//localhost:8000"));
