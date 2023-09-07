/*
    Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
    Array tersebut menampung bilangan genap dari 1 hingga 100
 
    Catatan:
    Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array
*/

// Membuat array kosong untuk menampung bilangan genap
const evenNumber = [];

// Menggunakan for loop untuk menambahkan bilangan genap ke dalam array
for (let i = 1; i <= 100; i++) {
  // Memeriksa apakah bilangan i merupakan bilangan genap
  if (i % 2 === 0) {
    // Jika i adalah bilangan genap, tambahkan ke dalam array evenNumber
    evenNumber.push(i);
  }
}

// Menampilkan isi array evenNumber
console.log(evenNumber);
