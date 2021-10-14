let initYear = parseInt(prompt("Introduce el año."));

if (((initYear % 4 == 0) && (initYear % 100 != 0)) || (initYear % 400 == 0)) {
    document.writeln(initYear + ' Es bisiesto. ');
} else {
    document.writeln(initYear + ' No es bisiesto ');
}