//---------------------------------OBJETOS--------------------------------//
// Definimos la clase producto

class producto{
    constructor (articulo, item, material, medida, color, precio){
    this.articulo= articulo;
    this.item = item;
    this.material= material;
    this.medida = medida;
    this.color = color;
    this.precio = precio}

    descripcion(){
        return  (+ this.articulo +" - "+ this.item + " - " + this.material +" - "+ this.medida +" - "+ this.color + " - $" + this.precio) };
}

//Objetos del catálogo
let cajonera = new producto(1, "Cajonera", "Madera paraíso laqueado con correderas metálicas", "Blanco", "120x47x120cm", 45000);
let sillon = new producto(2,"Sillón un cuerpo", "Pana antimanchas Estampado Zig Zag", "Naranja/Turquesa ", "75x65x70cm", 28000);
let silla = new producto(3, "Silla", "Eames con patas de madera", "Blanco ", "82x52x49cm", 8000);
let sofa = new producto(4, "Sofá dos cuerpos", "Pana con estructura metálica", "Gris","82x75x152", 55000);
let mesa = new producto(5,"Mesa comedor", "Madera Paraíso", "Blanco/Paraíso","73x80x120", 39000);
let ratona = new producto(6,"Mesa ratona", "Madera Paraíso", "Natural","90x50x45cm", 19000);