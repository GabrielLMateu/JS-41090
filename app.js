class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarnombreyprecio(){
        return`${this.nombre}-> Precio: $$(this.precio)` /* Muestra el nombre y el precio de un objeto de la clase producto */
    }
}
/* Objetos a comercializar */
const zapatilladanzaclasica = new Producto("Zapatilla danza clasica", 1450);
const zapatodetap = new Producto("Zapato de Tap", 1950);
const metatarsiana = new Producto("Metatarsiana", 1150);
const remeraalgodon = new Producto("Remera de Algodon PLIÉ CHASSÉ JETÉ", 750);

/* Array de carrito vacio */

const carritocompras [];


/* funcion que simula una compra */

function mostrarProductos(){
    let productos=prompt(`Cual de los siguientes productos deseas comprar? \n 1.${zapatilladanzaclasica.mostrarnombreyprecio()} \n 2.${zapatodetap.mostrarnombreyprecio()} \n 3.${metatarsiana.mostrarnombreyprecio()} \n 4.${remeraalgodon.mostrarnombreyprecio()}`);

        switch(productos){
            case"1":
                function agregaralcarrito(){
                    if(carritocompras)
                }
        }



}


/* function listadoproductos() {
    let listado = Number(prompt('Productos y precios \n1) Zapatillas danza clasica - $1450 \n2) Zapatos de Tap - $1950 \n3) Metatarsiana - $1150 \n4) Remera de Algodon PLIÉ CHASSÉ JETÉ - $750'))

    switch(listado){
    case 1 : alert('Usted eligio Zapatillas danza clasica');
    return alert('valor a abonar $1450');
    break;
    case 2 : alert('Usted eligio Zapatos de Tap');
    return alert('valor a abonar $1950');
    break;
    case 3 : alert('Usted eligio Metatarsiana');
    return alert('valor a abonar $1150');
    break;
    case 4 : alert('Usted eligio Remera de Algodon PLIÉ CHASSÉ JETÉ');
    return alert('valor a abonar $750');
    break;
 }
}

listadoproductos();

 */