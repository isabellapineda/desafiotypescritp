var bono;
var hijos;
function calcular_salario(cantidad_años, num_hijos, sueldo) {
    if (cantidad_años === void 0) { cantidad_años = 1; }
    if (num_hijos === void 0) { num_hijos = 0; }
    if ((cantidad_años > 5) && (num_hijos >= 1 && num_hijos <= 3)) {
        bono = sueldo * 12.5;
        hijos = num_hijos * 1000;
    }
    else if ((cantidad_años > 5) && (num_hijos >= 1 && num_hijos > 3)) {
        bono = sueldo * 12.5;
        hijos = (num_hijos - 3) * 1500;
    }
    else if ((cantidad_años <= 5) && (num_hijos > 1 && num_hijos <= 3)) {
        bono = 0;
        hijos = num_hijos * 1000;
    }
    else if ((cantidad_años <= 5) && (num_hijos > 1 && num_hijos > 3)) {
        bono = 0;
        hijos = (num_hijos - 3) * 1500;
    }
    return (bono + sueldo + hijos);
}
var n = 3;
var i;
for (i = 0; i < n; i++) {
    console.log("cantidad de empleados: ", n);
    var c = (Math.random() * 6);
    var num = Math.random() * 5;
    var su = Math.random() * 500;
    var a = calcular_salario(c, num, su);
    console.log("salario Total=" + a);
    console.log("cantidad de años trabajados: ", c);
    console.log("Numero de hijos: ", num);
    console.log("Sueldo: ", su);
    //trate de usar toFixed(2) para que me de solo dos decimales y no se vea tan horrible pero me dice que es te tipo 
    //string y el valor asignado fue number o algo asi, la cosa es que no agarraba  
}
var N = parseInt(prompt("Ingresar numero de vendedores "));
if (isNaN(N)) {
    alert("numero Invalido");
}
else {
    var i;
    for (i = 0; i < N; i++) {
        var sueldo1 = parseInt(prompt("Ingresar el sueldo"));
        var cantidad = parseInt(prompt("Ingresar cantidad de años"));
        var numero = parseInt(prompt("Ingresar el numero de hijos"));
        if (isNaN(sueldo1) || isNaN(cantidad) || isNaN(numero)) {
            alert("cantidad Invalida");
        }
        else {
            var b = calcular_salario(cantidad, numero, sueldo1);
            alert("salario Total=" + b);
            alert("cantidad de años trabajados: " + cantidad);
            alert("Numero de hijos: " + numero);
            alert("Sueldo: " + sueldo1);
        }
    }
}
