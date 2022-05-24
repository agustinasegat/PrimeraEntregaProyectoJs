// Armamos un carrito utilizado una variable llamada "carrito" con un array vacío
let carrito = []

//Le damos las opciones de agregar productos al carrito, ver los productos agregados, calcular el total de la compra, eligiendo el método de envío y pagar
let band = true ;
while (band) {

    let mensaje = "¡Bienvenido! \n Estas son tus opciones:"
    mensaje +=    "\n1) Agregar producto al carrito";
    mensaje +=    "\n2) Ver productos agregados"; 
    mensaje +=    "\n3) Eliminar productos";
    mensaje +=    "\n4) Comprar";
    mensaje +=    "\n PARA SALIR INGRESÁ ESC" ;

    let resp = prompt (mensaje);

    switch (resp){
        case "1" : 
            agregarProducto();
            break;
        case "2" : 
            mostrarCarrito();
            break;
        case "3" :
            eliminarProducto();
            break;
        case "4": 
            calcularPrecio();
            break;
        case "5": 
            pago();
            break;
        case "ESC" : 
            alert("¡Gracias por tu visita!");
            band=false;
            break;        
        default: 
            alert ("La opción ingresada no es válida, revisá bien los datos") ;}}


//--------------------------------- FUNCIONES----------------------------------------//


//Función para que el usuario elija el producto que va a llevar
function pedirDatos(){
let mensaje = " Catálogo:"
mensaje +=    "\n1) Cajonera de Madera paraíso laqueado con correderas metálicas $45.000";
mensaje +=    "\n2) Sillon un cuerpo Pana antidesgarro Estampado Zig Zag $28.000"; 
mensaje +=    "\n3) Silla Eames con patas de madera $8000";
mensaje +=    "\n4) Sofá dos cuerpos de pana con estructura metálica $55.000";
mensaje +=    "\n5) Mesa de Comedor de Madera Paraíso $39.000";
mensaje +=    "\n6) Mesa Ratona de Madera Paraíso $19.000";
mensaje +=    "\n Para salir ingresá ESC" ;

let resp = prompt (mensaje);

switch (resp){
    case "1" : 
        return cajonera;
        break;
    case "2" : 
        return sillon;
        break;
    case "3" :
        return silla;
        break;
    case "4": 
        return sofa;
        break;
    case "5": 
        return mesa;
        break;
    case "6":
        return ratona;
        break;
    case "ESC" : 
        alert("¡Gracias por tu visita!");
        band=false;
        break;        
    default: 
        alert ("La opción ingresada no es válida, revisá bien los datos") ;}

    }

// Agrega productos al carrito
function agregarProducto (){
let productos = pedirDatos();
if (productos){
    carrito.push(productos);}}

    
//Busca los productos dentro del carrito
function buscar(){
    if (carrito.length == 0){
        alert("¡Tu carrito está vacío!");
        return false;}  
    return true;}

//Muestra los productos que hay en el carrito
function mostrarCarrito(){
    let mensaje = "Productos en carrito:";  
//Si no hay productos va a decir que el carrito está vacío
    if (carrito.length == 0){
        alert("¡Tu carrito está vacío!")}
//Se muestran los productos que están en carrito con su nombre, color y precio
     else {carrito.forEach( (producto)=> {
        mensaje += "\n " + producto.descripcion()})
    alert(mensaje)}
}

//Elimina productos del carrito
    function eliminarProducto(){
    //Usamos la función buscar para buscar los objetos dentro del carrito
        if (buscar()) {
    //Nos va a mostrar lo que tenemos en el carrito
            mostrarCarrito();
    //Pregunta al usuario qué producto desea eliminar
            let productoIngresado = prompt("Ingresa el número de artículo del producto a eliminar");
    //Si el producto que se ingresa es igual al que estaba en el carrito, (es decir, si lo encuentra) va a pedir una confirmación.
            if (productoIngresado){
                let encontrado = carrito.find((articulo)=> articulo.articulo == productoIngresado)
                if (encontrado) {
                    let resp = confirm("Esta seguro?");
                    if (resp){
    //Cuando el producto se elimina, se envía un mensaje al usuario.
                        carrito = carrito.filter((articulo) => articulo.articulo != productoIngresado ) ;
                        alert("Producto eliminado");}
    //Si se elimina el único elemento del carrito, va a enviarnos el mensaje de carrito vacío
                             if (carrito.length == 0){
                                alert("¡Tu carrito ahora está vacío!")}
                            }
                            
                        }
                        
                    }
            
                }

    
//Calcula el total de la compra con envio
    function calcularPrecio(){

        //Calcula el precio total de los productos en carrito
        let total=0
        carrito.forEach(producto => {
            total = total + producto.precio; });
        alert("El precio total de los productos en el carrito es: $" + total);
        
        //Variables de precio de envío
        let retiro=0
        let CABA=800
        let GBA=1500
        let interior=3000
        totalEnvio= 0


 //Opciones para que el usuario elija el lugar de envío
    let bandera = true ;
    while (bandera) {
        let mensaje = "Elegí tu método de envío. \n Estas son tus opciones:"
        mensaje +=    "\n1) Retiro en el local";
        mensaje +=    "\n2) CABA"; 
        mensaje +=    "\n3) Gran Buenos Aires";
        mensaje +=    "\n4) Interior del País";
        mensaje +=    "\n Para pagar ingrese PAGO";
        mensaje +=    "\n Para volver al menú principal ingrese ESC" ;

    let resp = prompt (mensaje);
    switch (resp){
        case "1" : 
             totalEnvio = (total+retiro)
             alert ("El retiro en nuestros locales es sin cargo.\n El precio final con envío es" + " " +"$"+ totalEnvio)       
             break;
        case "2" : 
            totalEnvio = (total+CABA)
             alert ("El envío a CABA tiene un costo de $800.\n El precio final con envío es" + " " +"$"+ totalEnvio)
            break;
        case "3" :
            totalEnvio = (total+GBA)
            alert ("El envío al Gran Buenos Aires tiene un costo de $1500.\n El precio final con envío es" + " " +"$"+ totalEnvio)
            break;
        case "4": 
            totalEnvio = (total+interior)
            alert ("El envío al Interior del País tiene un costo de $3000.\n El precio final con envío es" + " " +"$"+ totalEnvio)
            break;  
        case "PAGO":
            pago()
        case "ESC":
            bandera=false
            break;
        default : 
            alert ("La opción ingresada no es válida, revisá bien los datos") ;}
        }
    }

//Pagar
function pago(){

//Solicitud de datos de envío y de pago
alert("¡Bienvenido a nuestro sistema de pagos!")
nombre = prompt("Ingresá tu nombre")
apellido = prompt("Ingresá tu apellido")
domicilio = prompt ("Ingresá tu domicilio completo")
email = prompt ("Ingresá tu email")
telefono =prompt ("Ingresá tu Teléfono")
tarjeta = prompt("Ingresá tu número de tarjeta de crédito")
seguridad= prompt("Ingresá el código de seguridad de tu tarjeta")
vencimiento= prompt("Ingresá la fecha de vencimiento de tu tarjeta")

  
// Para calcular el pago en cuotas
let precio = parseInt(prompt("Ingresá el total a pagar."))
    
// Mientras no se ingrese precio, el precio ingresado sea menor a 1 o no sea un valor numérico, va a solicitar el reingreso
while (!precio || precio <1 || (isNaN (precio))){
    precio = parseInt(prompt("Ingresá el total a pagar."))
    continue}

  
// Tasa de interés por cuota
const interes = 0.05

//Se solicita al usuario que ingrese la cantidad de cuotas deseada
let cuotas = " "
function solicitarCuotas(){
    cuotas = parseInt(prompt("Ingresá una cantidad de cuotas entre 1 y 6"));}

//Mientras no se ingresen las cuotas, el valor ingresado sea menor a 1, superior a 6 o no sea un valor numérico, va a solicitar se reingresen
while ( !cuotas || cuotas <=0 || cuotas >6 || (isNaN(cuotas)) ){
    solicitarCuotas(cuotas)
    continue}
//Cuando se ingresen entre 2 y 6 cuotas va a calcular el precio con recargo y el valor de cada cuota y lo va a devolver en un alert
        if  (cuotas >=2){
            valorCuota = calcularCuota(precio,interes,cuotas);
            valorTotal = calcularTotal(precio, interes,cuotas);
            mostrar ("¡Operación exitosa!\n Pagarás" + " " + "$" + valorTotal+ " " + "en" + " " + cuotas + " " + "cuotas mensuales de"+ " " +"$"+ valorCuota+ "\n En breve recibirás un email de confirmación en"+ " "+ email);}
//Cuando se ingrese una sola cuota va a devolver un mensaje 
        else { 
            alert ("¡Operación exitosa!\n Pagarás" +" "+ "$"+ precio + " "+ "en"+ " " + cuotas +" "+"cuota"+" " + "sin interés\n En breve recibirás un email de confirmación en"+ " "+ email)}
        }     
        

// Function calcular el precio con recargo
function calcularTotal (a, b, c){
    return  a + ((a*b)*c)}

// Function calcular el valor de cada cuota
function calcularCuota (a, b, c){
    return (a+ (a*b))/c}

// Function mostrar mensaje 
function mostrar (mensaje){
    alert(mensaje)}

