/*
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

 Output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]


/*
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[1]);

Output:
42.5


---------->
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

Output:
Cokelat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

/*

--------------------> MENAMBAHKAN DATA KE DALAM ARRAY DENGAN METODE PUSH() <--------------------
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.push('JavaScript');
console.log(myArray);

/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

/*

--------------------> MENGELUARKAN DATA ATAU ELEMEN TERAKHIR ARRAY DENGAN METODE POP() <--------------------
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.pop();
console.log(myArray);

Output:
[ Cokelat, 42.5, 22, true ]
*/

/*

--------------------> MEMANIPULASI DATA PADA ARRAY DENGAN SHIFT() DAN & UNSHIFT() <--------------------
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);

Output:
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

/*

--------------------> MENGHAPUS DATA DARI ARRAY DENGAN KEYWORD "DELETE" <-------------------
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray[1];
console.log(myArray);

Output:
[ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]
*/

/*

--------------------> MENGHAPUS ELEMEN DARI ARRAY DENGAN SPLICE() <--------------------
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);

Output:
[ 'Cokelat', 42.5, true, 'Programming' ]
*/

/*

----------> MENAMBAHKAN ELEMEN PADA ARRAY DENGAN SPLICE() <-------------------
const month = ['January', 'March', 'April', 'May'];
console.log('before splice: ', month);

month.splice(1, 0, 'February');
console.log('after splice: ', month);

Output:
before splice:  [ 'January', 'March', 'April', 'May' ]
after splice:  [ 'January', 'February', 'March', 'April', 'May' ]
*/