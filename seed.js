const bcrypt = require("bcryptjs");
const { sequelize, Usuario, Producto } = require("./db");

const seed = async () => {
  await sequelize.sync({});

  const hash = await bcrypt.hash("hamburguesita", 10);
  await Usuario.create({
    nombre: "Admin",
    email: "admin@delicias.com",
    password: hash,
  });

  await Producto.bulkCreate([
    {
      nombre: "Hamburguesa Cheeseburger",
      descripcion:
        "Doble smash, cheddar, panceta crocante y cebolla caramelizada",
      precio: 480,
      imagen: "/ImgProductos/Cheeseburger.jpeg",
    },
    {
      nombre: "Hamburguesa Criolla",
      descripcion:
        "Doble smash, queso provolone, huevo frito y cebolla caramelizada",
      precio: 510,
      imagen: "/ImgProductos/Criolla.jpeg",
    },
    {
      nombre: "Hamburguesa Smash BBQ",
      descripcion:
        "Doble smash, cheddar, panceta crocante, cebolla caramelizada y salsa BBQ",
      precio: 460,
      imagen: "/ImgProductos/SmashBBQ.jpeg",
    },
    {
      nombre: "Hamburguesa Smash Clásica",
      descripcion:
        "Doble smash, cheddar, panceta crocante y cebolla caramelizada",
      precio: 430,
      imagen: "/ImgProductos/SmashClasica.jpeg",
    },
    {
      nombre: "Empanada Cheeseburger",
      descripcion:
        "Carne y cheddar fundido con todo el sabor de una clásica cheeseburger.",
      precio: 90,
      imagen: "/ImgProductos/Emp.Cheeseburger.jpeg",
    },
    {
      nombre: "Empanada Criolla",
      descripcion:
        "Carne, cebolla, morrón y huevo duro en la clásica combinación criolla.",
      precio: 95,
      imagen: "/ImgProductos/Emp.CarneCriolla.jpeg",
    },
    {
      nombre: "Empanada de Pollo",
      descripcion:
        "Pollo desmenuzado y cebolla en una combinación suave y sabrosa.",
      precio: 90,
      imagen: "/ImgProductos/Emp.Pollo.jpeg",
    },
    {
      nombre: "Empanada de Queso y Cebolla",
      descripcion: "Cebolla salteada en manteca, orégano y mucho queso",
      precio: 90,
      imagen: "/ImgProductos/Emp.Quesoycebolla.jpeg",
    },
    {
      nombre: "Empanada de Jamón y Queso",
      descripcion: "Jamón y queso fundido",
      precio: 85,
      imagen: "/ImgProductos/Emp.Jamonyqueso.jpeg",
    },
    {
      nombre: "Empanada de Espinaca y Queso",
      descripcion: "Espinaca y queso fundido",
      precio: 90,
      imagen: "/ImgProductos/Emp.Espinacayqueso.jpeg",
    },
    {
      nombre: "Papas Fritas",
      descripcion: "Porción de papas fritas crocantes",
      precio: 180,
      imagen: "/ImgProductos/Fritas.jpeg",
    },
    {
      nombre: "Papas Fritas con cheddar y bacon",
      descripcion:
        "Porción de papas fritas crocantes con salsa cheddar y bacon salteado",
      precio: 320,
      imagen: "/ImgProductos/FritasCB.jpeg",
    },
  ]);

  console.log("¡Datos cargados correctamente!");
  process.exit();
};

seed();
