const bcrypt = require("bcrypt");
const { sequelize, Usuario } = require("./db");

const crearAdmin = async () => {
  await sequelize.sync({});

  const hash = await bcrypt.hash("hamburguesita", 10);

  await Usuario.create({
    nombre: "Admin",
    email: "admin@delicias.com",
    password: hash,
    admin: true,
  });

  console.log("¡Admin creado correctamente!");
  process.exit();
};

crearAdmin();
