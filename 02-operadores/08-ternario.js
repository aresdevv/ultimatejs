function ingreso() {
  return "Permitir ingreso";
}

function noIngreso() {
  return "No permitir ingreso";
}

let edad = 16;
let acceso = edad > 17 ? ingreso() : noIngreso();

console.log(acceso);
