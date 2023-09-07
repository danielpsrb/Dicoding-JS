/*
 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
     - Menerima dua buah argumen number, a dan b.
     - Mengembalikan nilai terkecil antara a atau b.
     - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 
     Contoh:
     minimal(1, 4) // output: 1
     minimal(3, 2) // output: 2
     minimal(3, 3) // output: 3
*/

/*
2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
    Jika angka tidak ditemukan, maka kembalikan nilai -1.

    contoh:
    findIndex([1, 2, 3, 4, 5], 3) // output: 2
    findIndex([1, 2, 3, 4, 5], 6) // output: -1
    findIndex([1, 2, 3, 4, 5], 5) // output: 4
*/

//JAWABAN SOAL NO.1
function minimal(a, b) {
    if (a <= b) {
      return a;
    } else {
      return b;
    }
  }
  
  // Contoh penggunaan fungsi minimal
  console.log(minimal(1, 4)); // Output: 1
  console.log(minimal(3, 2)); // Output: 2
  console.log(minimal(3, 3)); // Output: 3


// JAWABAN SOAL NO.2
function findIndex(array, number) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === number) {
        return i; // Mengembalikan index jika angka ditemukan
      }
    }
    return -1; // Mengembalikan -1 jika angka tidak ditemukan di dalam array
  }
  
  // Contoh penggunaan fungsi findIndex
  console.log(findIndex([1, 2, 3, 4, 5], 3)); // Output: 2
  console.log(findIndex([1, 2, 3, 4, 5], 6)); // Output: -1
  console.log(findIndex([1, 2, 3, 4, 5], 5)); // Output: 4