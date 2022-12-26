//CARRITO: array vacío para el carrito de compras
const carrito = [];

// DECLARAMOS LAS FUNCIONES
function subTotal () {
    //TAMAÑO
    let valor_tamanio;
    if(productos.tamanio=="PEQUENIO"){
        return valor_tamanio= 2.00;
    } else if (productos.tamanio=="MEDIANO"){
        return valor_tamanio= 3.00;
    } else if (productos.tamanio=="GRANDE"){
        return valor_tamanio= 4.00;
    } else {
        alert("Ingrese un tamaño correcto");
    }
    //FORMATO
    let valor_formato;
    if (productos.formato=="SVG"){
        return valor_formato= 3.00;
    } else if (productos.formato=="PNG"){
        return valor_formato= 2.00;
    } else if (productos.formato=="GIF"){
        return valor_formato= 2.50;
    } else if (productos.formato=="MP4"){
        return valor_formato= 4.00;
    } else {
        return valor_formato= 1.00;
    }
    //TIEMPO DE ENTREGA
    let valor_tiempoDeEntrega;
    if (productos.tiempoDeEntrega==5){
        return valor_tiempoDeEntrega= 4.00;
    } else if (productos.tiempoDeEntrega>=6){
        return valor_tiempoDeEntrega= 3.00;
    } else if (productos.tiempoDeEntrega>=10){
        return valor_tiempoDeEntrega= 0.00;
    }
    //NUMERO DE REVISIONES
    let valor_nroDeRevisiones;
    if (productos.nroDeRevisiones== 3){
        return valor_nroDeRevisiones= 5.00;
    } else if (productos.nroDeRevisiones== 2){
        return valor_nroDeRevisiones= 3.00;
    } else if(productos.nroDeRevisiones>=1){
        return valor_nroDeRevisiones= 1.00;
    } else {
        alert("El número de revisiones ingresado no es válido");
    }

    let valor_subTotal= parseFloat(valor_tamanio+valor_formato+valor_tiempoDeEntrega+valor_nroDeRevisiones);
    return valor_subTotal;
}
function sumaIva () {
    let valor_iva=parseFloat(subTotal()*0.21);
    return valor_iva;
}
function total () {
    let valor_total=parseFloat(subTotal()+sumaIva());
    return valor_total;
}
function codigoCompra () {
    let nroOperacion= apellidoCliente+"-"+(productos.id);
    return nroOperacion;
}

function comenzar () { 

    //TÉRMINOS Y CONDICIONES
    alert("\tSe informan a continuación los términos y condiciones: \n\t 1- Para que comencemos con el trabajo requerido necesitaremos que abone el 50% por adelantado, brindandole una factura detallada de la transacción; \n\t 2- Se coordinara una reunión previa o llamada, para organizar cada detalle y/o sacar dudas; \n\t 3- Formas de pago: tarjeta de débito, transferencia, efectivo o tarjeta de crédito hasta 1 (una) cuota sin interés; \n\t 4- Plazo de vigencia de precios: hasta cinco días hábiles, posteriores a una reunión con el equipo técnico; \n\t 5- La entrega solicitada de 10 (diez) días habiles o mas no deberá abonarla, siendo totalmente gratis");
    //MENSAJE DE BIENVENIDA
    alert("Bienvenido a DMD, sector de Diseño, estamos para servile");
    alert("COMENCEMOS...");
    //SOLICITAMOS AL USUARIO/CLIENTE, QUE INGRESE SUS DATOS

    //1- apellido
    alert("Ingrese su apellido o razón social: ");
    function ingresarDato() {
        let dato= prompt("Aquí: ").toUpperCase();
        return dato;
    }
    let apellidoCliente= ingresarDato();
    //2- nombre
    alert("Ingrese su nombre: ");
    let nombreCliente= ingresarDato();
    //3- telefono
    alert("Ingrese su número telefonico: ")
    let telefono= ingresarDato();
    //4- e-mail
    alert("Ingrese su correo electrónico: ");
    let e_mail= ingresarDato();
    //5- identificación fiscal- en caso de desear ingresarla
    let respuesta1= prompt("¿Desea ingresar su identificación fiscal? (SI-NO): ").toUpperCase();
    if (respuesta1=="SI"){
        alert("Ingrese su ID-Fiscal: ");
        let idFiscal= ingresarDato();
    }
    //6- direccion- en caso de desear ingresarla
    let respuesta2= prompt("¿Desea ingresar su dirección? (SI-NO): ").toUpperCase();
    if (respuesta2=="SI"){
        alert("Ingrese su dirección: ");
        let direccion= ingresarDato();
    }

    //COMENZAMOS CON LA COMPRA

    //LLAMAMOS A LA FUNCION PARA ORDENAR LA LISTA
    // Ordenar productos de menor a mayor precio
    const ordenarMenorMayor = () => {
        productos.sort((a, b) => a.precio - b.precio);
        mostrarListaOrdenada();
    }
    // Ordenar productos de mayor a menor precio
    const ordenarMayorMenor = () => {
        productos.sort((a, b) => b.precio - a.precio);
        mostrarListaOrdenada();
    }
    // Mostramos la lista ordenada
    const mostrarListaOrdenada = () => {
        const listaOrdenada = productos.map(producto => {
            return "- "+producto.nombre+" $"+producto.precio;
        });
        alert("Lista de precios:"+"\n\n"+listaOrdenada.join("\n"));
        comprarProductos(listaOrdenada);
    };
    //comprar productos de la lista, solicitamos al usuario que ingrese uno de la lista
    const comprarProductos = (listaDeProductos) => {
        let otroProducto = false;
        let productoNombre = " ";
        let productoCantidad = 0;

        do {
            productoNombre = prompt("¿Que producto desea comprar?"+"\n\n"+listaDeProductos.join("\n"));
            productoCantidad = parseInt(prompt("¿Cuántos querés comprar?"));
            const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());
            if (producto) {
                agregarAlCarrito(producto, producto.id, productoCantidad);
            } else {
                alert("El producto no se encuentra en el catálogo");
            }

            otroProducto = confirm("¿Desea agregar otro producto?");
        } while (otroProducto);

    confirmarCompra();
    };
    //agregamos los productos comprados al carrito, le pasamos el producto, el id y la cantidad como parametro
    const agregarAlCarrito = (producto, productoId, productoCantidad) => {
        const productoRepetido = carrito.find(producto => producto.id === productoId);
        if (productoRepetido) {
            productoRepetido.cantidad += productoCantidad;
        } else {
            producto.cantidad += productoCantidad;
            carrito.push(producto);
        }
    };
    //eliminar producto del carrito, si es mayor a 1, disminuye el producto.cantidad, sino con splice, lo elimino del array
    const eliminarProductoCarrito = (productoNombre) => {
        carrito.forEach((producto, index) => {
            if (producto.nombre.toLowerCase() === productoNombre) {
                if (producto.cantidad > 1) {
                    producto.cantidad--;
                } else {
                    carrito.splice(index, 1);
                }
            }
        })
        confirmarCompra();
    };
    //confirmamos la compra, con map recorremos el carrito y retorna nombre y cantidad de los productos comprados
    const confirmarCompra = () => {
        const listaProductos = carrito.map(producto => {
            return "- "+producto.nombre+" | Cantidad: "+producto.cantidad;
        });
        //con join hacemos una lista de los productos COMPRADOS
        const confirmar = confirm("Checkout: "
            +"\n\n"+listaProductos.join('\n')
            +'\n\nPara continuar presione "Aceptar/Ok" sino "Cancelar" para eliminar productos del carrito'
        );
        //si confirmar es true, entra en el if, finalizando la compra
        if (confirmar) {
            finalizarCompra(listaProductos)
        } else { //sino, se le pide al usario productos a eliminar
            const productoAEliminar = prompt("Ingrese el nombre del producto a eliminar: ");
            eliminarProductoCarrito(productoAEliminar);
        }
    };
    //finalizamos la compra: le pasamos la lista de productos y calculamos cantidad y precio final
    const finalizarCompra = (listaProductos) => {
        const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
        const precioTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
        alert('Detalle de su compra:'
            +"\n\n"+listaProductos.join("\n")
            +"\n\nTotal de productos: "+cantidadTotal
            +"\n\nEl total de la compra es: "+precioTotal
            +"\n\nGracias por su compra!"
        )
    };
    //COMPRAR: ORDENAMOS LA LISTA POR PRECIO
    const comprar = () => {
        const productosBaratos = confirm("¿Querés ordenar la lista de productos del más barato al más caro?");
        if (productosBaratos) {
            ordenarMenorMayor();
        } else {
            ordenarMayorMenor();
        }
    };
    comprar();
    
    //FORMAS DE PAGO
    // let formaPago=prompt("Ingrese como desea abonar -EFECTIVO-TRANSFERENCIA-CREDITO-DEBITO- : ").toUpperCase();
    // if (formaPago=="EFECTIVO" || formaPago=="TRANSFERENCIA" || formaPago=="DEBITO") {
    //     let precioFinal= parseFloat(precio_logotipo+precio_flyer+precio_banner+precio_publicidad+precio_disenioEditorial+precio_dibujo+precio_personajeAnimado+precio_marca+precio_eslogan);
    //     let precioAdelanto=parseFloat(precioFinal*50/100);
    //     alert("El precio final de su operación es de U$D: "+precioFinal+" y el 50% que deberá abonar previamente para que comencemos con su elaboración es de U$D: "+precioAdelanto);
    // }else if(formaPago=="CREDITO"){
    //     let credito=parseInt(prompt("Ingrese en cuántas cuotas quiere realizar su comprar, le informamos que tiene hasta una cuota sin interés: "));
    //     if(credito==1){
    //         let precioFinal= parseFloat(precio_logotipo+precio_flyer+precio_banner+precio_publicidad+precio_disenioEditorial+precio_dibujo+precio_personajeAnimado+precio_marca+precio_eslogan);
    //         let precioAdelanto=parseFloat(precioFinal*50/100);
    //         alert("El precio final de su operación es de U$D: "+precioFinal+" y el 50% que deberá abonar previamente para que comencemos con su elaboración es de U$D: "+precioAdelanto); 
    //     } else if(credito>=2) {
    //         let precioFinal= parseFloat(precio_logotipo+precio_flyer+precio_banner+precio_publicidad+precio_disenioEditorial+precio_dibujo+precio_personajeAnimado+precio_marca+precio_eslogan);
    //         let precioFinal_credito= precioFinal+(precioFinal*20/100);
    //         let precioAdelanto=parseFloat(precioFinal_credito*50/100);
    //         alert("El precio final de su operación es de U$D: "+precioFinal_credito+" y el 50% que deberá abonar previamente para que comencemos con su elaboración es de U$D: "+precioAdelanto);
    //     }else {
    //         alert("Ingrese un método de pago correcto");
    //     }
    // }
    // //DETALLE FINAL DE SU OPERACION
    // alert("Su compra final se detalla a continuación: ");
    // for (var producto of arrayElementosComprados) {
    //     document.write("<h3> Nombre de producto ingresado : "+producto.nombre+"</h3>");
    //     document.write("<h3> Detalle del producto ingresado : "+producto.detalle+"</h3>");

    //     console.log(producto.nombre);
    //     console.log(producto.detalle);

    // }
    alert("Su operación ha finalizado, en breve lo/a estaremos contactando. Mucha gracias por elegirnos!");

//cierre del boton 
}