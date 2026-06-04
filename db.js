const { Model, DataTypes } = require("sequelize");
const sequelize = require("./config");

class Usuario extends Model {}
Usuario.init(
  {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    rol: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { sequelize, modelName: "usuario" },
);

class Producto extends Model {}
Producto.init(
  {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    precio: DataTypes.STRING,
  },
  { sequelize, modelName: "producto" },
);

module.exports = { sequelize, Usuario, Producto };
