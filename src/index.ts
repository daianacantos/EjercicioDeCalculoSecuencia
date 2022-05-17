/*Secuencia
Ejercicio: Cálculo de Descuento
57
• Implemente un algoritmo que calcule y muestre
por pantalla el precio final de un producto
después de aplicarle un descuento
• El precio inicial del producto es $450,50
• El descuento a aplicar es del 10%. Recuerde que
puede obtener el 10% de un valor multiplicado por 0,1
• El precio y el descuento deben ser guardados en
variables (no ingresados por teclado)*/

let precioInicial: number = 450.5;
let descuentoAplicado: number = (precioInicial * 10) / 100;
let precioFinal: number = precioInicial - descuentoAplicado;
console.log("el precio sin descuento es:", precioInicial + "", "ars");
console.log(" el descuento del 10% es:" + descuentoAplicado + "ars");
console.log("el precio Final es:", precioFinal, "ars");
