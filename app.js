// Declaracion de variables :
let carrito = [];
const seccionProductos = document.querySelector("#seccionProductos");
const seccionCarrito = document.querySelector("#seccionCarrito");
// Templates
const templateProductos = document.querySelector("#templateProductos");
const templateCarritos = document.querySelector("#templateCarritos");
const fragment = document.createDocumentFragment();

/* Constructor de productos y cargamos el array de productos */
class Producto {
  // se construye plantilla de productos
  constructor(id, codigo, descripcion, categoria, precio, cantidad) {
    this.id = id;
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

const productos = [
  // se cargas prodcutos manualmente al array
  new Producto(1, 101, "Zapatilla de danza Clasica Rosa", "Zapatilla de danza", 10500),
  new Producto(2, 102, "Zapatilla de danza Clasica Crema", "Zapatilla de danza", 10500),
  new Producto(3, 103, "Zapatilla de danza Jazz Negra", "Zapatilla de danza", 10500),
  new Producto(4, 104, "Zapatilla de danza Jazz Azul", "Zapatilla de danza", 10500),
  new Producto(5, 105, "Zapato de Tap Negro", "Zapato de cuero Tap", 2400),
  new Producto(6, 106, "Metatarsiana", "Complementos", 700),
  new Producto(7, 107, "Remera PLIÉ CHASSÉ JETÉ ALL DAY", "Remera 100% Algodon", 1250),
  new Producto(8, 108, "Remera HOY NO PUEDO ENSAYO", "Remera 100% Algodon", 1250),
  new Producto(9, 109, "Remera DANCE MODE ON", "Remera 100% Algodon", 1250),
];

/* Finaliza Constructor y Array de Productos */

/* Creamos la interaccion de los click con los botones */

document.addEventListener("click", (evento) => {
  // console.log(evento.target.matches(".card button"));

  // Capturamos ID del producto el cual desean agregar al carro
  if (evento.target.matches(".card button")) {
    insertarCarrito(evento);
  }

  // Capturamos ID del Producto que desean restar Cantidad o eliminar

  if (evento.target.matches(".list-group-item .btn-danger")) {
    botonRestar(evento);
  }

  // Capturamos el ID del Producto que desean sumarle cantidad

  if (evento.target.matches(".list-group-item .btn-success")) {
    botonSumar(evento);
  }
});

// Dibujamos la lista de productos

productos.forEach((item) => {
  const clone = templateProductos.content.cloneNode(true);
  clone.querySelector(".card-header").textContent = item.descripcion;
  clone.querySelector("#cod").textContent = item.codigo;
  clone.querySelector("#cat").textContent = item.categoria;
  clone.querySelector("#precio").textContent = item.precio;
  clone.querySelector("button").dataset.id = item.id;

  fragment.appendChild(clone);
});
seccionProductos.appendChild(fragment);

// PINTAMOS EL TEMPLATE DEL CARRITO
const verCarrito = () => {
  seccionCarrito.textContent = "";

  carrito.forEach((item) => {
    const clone = templateCarritos.content.cloneNode(true);
    clone.querySelector(".badge").textContent = item.cantidad;
    clone.querySelector(".text-white .lead").textContent = item.descripcion;
    clone.querySelector("div .lead span").textContent =
      item.cantidad * item.precio;
    clone.querySelector(".btn-success").dataset.id = item.id;
    clone.querySelector(".btn-danger").dataset.id = item.id;

    fragment.appendChild(clone);
  });
  seccionCarrito.appendChild(fragment);
};

// FUNCION AGREGAR CARRITO
const insertarCarrito = (evento) => {
  //console.log(evento.target.dataset);
  const eventoId = Number(evento.target.dataset.id);
  // console.log("esto devuelve", eventoId);
  const prod = productos.find((item) => item.id === eventoId);
  const buscarCoincidencia = carrito.findIndex((item) => item.id === eventoId);
  //console.log(buscarCoincidencia);
  if (buscarCoincidencia === -1) {
    // prod.cantidad = 1;
    carrito.push(
      new Producto(
        prod.id,
        prod.codigo,
        prod.descripcion,
        prod.categoria,
        prod.precio,
        (prod.cantidad = 1)
      )
    );
  } else {
    carrito[buscarCoincidencia].cantidad++;
  }
  console.log(carrito);
  verCarrito();
};

// BOTON SUMAR

const botonSumar = (evento) => {
  const eventoId = Number(evento.target.dataset.id);
  carrito = carrito.map((item) => {
    if (item.id === eventoId) {
      item.cantidad++;
    }
    return item;
  });
  verCarrito();
};

const botonRestar = (evento) => {
  const eventoId = Number(evento.target.dataset.id);
  carrito = carrito.filter((item) => {
    if (item.id === eventoId) {
      if (item.cantidad > 0) {
        item.cantidad--;
        if (item.cantidad === 0) return;
        return item;
      }
    } else {
      return item;
    }
  });
  verCarrito();
};