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
      categoria: "hamburguesa",
    },
    {
      nombre: "Hamburguesa Criolla",
      descripcion:
        "Doble smash, queso provolone, huevo frito y cebolla caramelizada",
      precio: 510,
      imagen: "/ImgProductos/Criolla.jpeg",
      categoria: "hamburguesa",
    },
    {
      nombre: "Hamburguesa Smash BBQ",
      descripcion:
        "Doble smash, cheddar, panceta crocante, cebolla caramelizada y salsa BBQ",
      precio: 460,
      imagen: "/ImgProductos/SmashBBQ.jpeg",
      categoria: "hamburguesa",
    },
    {
      nombre: "Hamburguesa Smash Clásica",
      descripcion:
        "Doble smash, cheddar, panceta crocante y cebolla caramelizada",
      precio: 430,
      imagen: "/ImgProductos/SmashClasica.jpeg",
      categoria: "hamburguesa",
    },
    {
      nombre: "Empanada Cheeseburger",
      descripcion:
        "Carne y cheddar fundido con todo el sabor de una clásica cheeseburger.",
      precio: 90,
      imagen: "/ImgProductos/Emp.Cheeseburger.jpeg",
      categoria: "empanada",
    },
    {
      nombre: "Empanada Criolla",
      descripcion:
        "Carne, cebolla, morrón y huevo duro en la clásica combinación criolla.",
      precio: 95,
      imagen: "/ImgProductos/Emp.CarneCriolla.jpeg",
      categoria: "empanada",
    },
    {
      nombre: "Empanada de Pollo",
      descripcion:
        "Pollo desmenuzado y cebolla en una combinación suave y sabrosa.",
      precio: 90,
      imagen: "/ImgProductos/Emp.Pollo.jpeg",
      categoria: "empanada",
    },
    {
      nombre: "Empanada de Queso y Cebolla",
      descripcion: "Cebolla salteada en manteca, orégano y mucho queso",
      precio: 90,
      imagen: "/ImgProductos/Emp.Quesoycebolla.jpeg",
      categoria: "empanada",
    },
    {
      nombre: "Empanada de Jamón y Queso",
      descripcion: "Jamón y queso fundido",
      precio: 85,
      imagen: "/ImgProductos/Emp.Jamonyqueso.jpeg",
      categoria: "empanada",
    },
    {
      nombre: "Empanada de Espinaca y Queso",
      descripcion: "Espinaca y queso fundido",
      precio: 90,
      imagen: "/ImgProductos/Emp.Espinacayqueso.jpeg",
      categoria: "empanada",
    },
    {
      nombre: "Papas Fritas",
      descripcion: "Porción de papas fritas crocantes",
      precio: 180,
      imagen: "/ImgProductos/Fritas.jpeg",
      categoria: "acompañamiento",
    },
    {
      nombre: "Papas Fritas con cheddar y bacon",
      descripcion:
        "Porción de papas fritas crocantes con salsa cheddar y bacon salteado",
      precio: 320,
      imagen: "/ImgProductos/FritasCB.jpeg",
      categoria: "acompañamiento",
    },
    {
      nombre: "Promo Big 3",
      descripcion: "3 burgers a elección + fritas + bebida de 1,5lts",
      precio: 1320,
      imagen: "/ImgProductos/PromoBig3.jpeg",
      categoria: "promo",
    },
    {
      nombre: "Promo Duo",
      descripcion: "2 burgers a elección + fritas + 2 bebidas de 600ml",
      precio: 990,
      imagen: "/ImgProductos/Promoduo.jpeg",
      categoria: "promo",
    },
    {
      nombre: "Promo Familia",
      descripcion: "4 burgers a elección + fritas + bebida de 2,25lts ",
      precio: 1690,
      imagen: "/ImgProductos/PromoFamilia.jpeg",
      categoria: "promo",
    },
    {
      nombre: "Promo Solari",
      descripcion: "Burger a elección + fritas + bebida 600ml ",
      precio: 550,
      imagen: "/ImgProductos/PromoSolari.jpeg",
      categoria: "promo",
    },
    {
      nombre: "Promo de Empanadas",
      descripcion: "Una para cada momento que se te presenta",
      precio: "",
      imagen: "/ImgProductos/PromoEmpanadas.jpeg",
      categoria: "promo",
    },
    {
      nombre: "Bebidas",
      descripcion: "Elegí el sabor que queres que te acompañe",
      precio: "",
      imagen: "/ImgProductos/Bebidas.jpeg",
      categoria: "bebida",
    },
  ]);

  console.log("¡Datos cargados correctamente!");
  process.exit();
};

seed();
