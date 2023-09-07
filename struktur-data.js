/* STRUKTUR DATA OBJECT

---------------> MEMBUAT OBJECT & MENAMPILKAN PROPERTY DARI OBJECT DENGAN DOT OPERATOR <---------------
const user = {
    firstName: "Danie;",
    lastName: "Pasaribu",
    age: 21,
    isJedi: true,
  };

  console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
  console.log(`Umur saya ${user.age} tahun`);

  /* output
Halo, nama saya Daniel Pasaribu
Umur saya 21 tahun
*/

/*

---------------> MEMBUAT OBJECT & MENAMPILKAN PROPERTY DARI OBJECT DENGAN BRACKET <---------------
const user = {
    firstName: "Daniel",
    lastName: "Pasaribu",
    age: 21,
    isJedi: true,
    "home world": "Medan"
  };
  
  console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
  console.log(`Umur saya ${user.age} tahun`);
  console.log(`Saya berasal dari ${user["home world"]}`);

  /* output
Halo, nama saya  Daniel Pasaribu
Umur saya 21 tahun
Saya berasal dari Medan
*/

/*

----------> MENGUBAH NILAI PROPERTY DI DALAM OBJECT DENGAN ASSIGNMENT OPERATOR (=) <----------
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };
  
  spaceship.color = "Glossy red";
  spaceship["maxSpeed"] = 1300;
  console.log(spaceship);

  /* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red'
}
  */

/*
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };
  
  spaceship.color = "Glossy red";
  spaceship["maxSpeed"] = 1300;
  spaceship.class = "Light freighter";
  
  console.log(spaceship);
  /* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'
}
*/

/*

----------> MENGHAPUS PROPERTY PADA OBJECT DENGAN KEYWORD DELETE <----------
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };
  
  spaceship.color = "Glossy red";
  spaceship["maxSpeed"] = 1300;
  
  delete spaceship.manufacturer;
  
  console.log(spaceship);

  /* output
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
 */