function listadoproductos() {
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

