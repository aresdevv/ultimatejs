let personaje = {
  nombre: "Giovanni",
  anime: "Dragon ball",
  edad: 23,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

delete personaje.anime;
console.log(personaje);
