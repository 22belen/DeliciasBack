const express = require("express");
const app = express();
const { sequelize, Usuario, Producto } = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

sequelize.sync({ force: true }).then(() => {
  console.log("Tablas sincronizadas correctamente.");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const usuario = await Usuario.findOne({ where: { email } });

  if (!usuario) {
    return res.status(401).json({ mensaje: "Credenciales incorrectas" });
  }

  const coincide = await bcrypt.compare(password, usuario.password);

  if (!coincide) {
    return res.status(401).json({ mensaje: "Credenciales incorrectas" });
  }

  const token = jwt.sign(
    { id: usuario.id, email: usuario.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  res.json({ token });
});

const verificarToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token requerido" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido" });
  }
};

app.get("/productos", async (req, res) => {
  const productos = await Producto.findAll();
  res.json(productos);
});

app.get("/productos/:id", async (req, res) => {
  const { id } = req.params;
  const producto = await Producto.findByPk(id);
  res.json(producto);
});

app.post("/productos", verificarToken, async (req, res) => {
  const { nombre, descripcion, precio, imagen, categoria } = req.body;
  await Producto.create({ nombre, descripcion, precio, imagen, categoria });
  res.json({ mensaje: "¡Producto agregado correctamente!" });
});

app.patch("/productos/:id", verificarToken, async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, imagen, categoria } = req.body;
  await Producto.update(
    { nombre, descripcion, precio, imagen, categoria },
    { where: { id } },
  );
  res.json({ mensaje: "¡Producto actualizado correctamente!" });
});

app.delete("/productos/:id", verificarToken, async (req, res) => {
  const { id } = req.params;
  await Producto.destroy({ where: { id } });
  res.json({ mensaje: "Producto eliminado con éxito." });
});

app.listen(8000, console.log("https//localhost:8000"));
