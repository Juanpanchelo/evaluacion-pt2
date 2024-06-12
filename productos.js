

let inventario ={
  productos: [


    ]
}

function agregarProducto(nombre, precio, cantidad){
    
    let product = new Object()
    product.nombre = nombre;
    product.precio = precio;
    product.cantidad = cantidad;

    inventario.productos.push(product)
}

agregarProducto("leche", 3000, 10);
agregarProducto("arepas", 5000, 40);
agregarProducto("chocolate", 7000, 7);
agregarProducto("Pasta", 6000, 15);

function listarProductos(){
    for( let i = 0; i < inventario.productos.length; i++ ) {
        console.log( inventario.productos[i] );
    }
}


function totalInventario(){
    for( let i = 0; i < inventario.productos.length; i++ ) {
        console.log(`El precio total de inventario del producto ${inventario.productos[i].nombre}, es de ${(inventario.productos[i].precio)*(inventario.productos[i].cantidad)}`);
    }
}




console.log(listarProductos());
console.log(totalInventario());