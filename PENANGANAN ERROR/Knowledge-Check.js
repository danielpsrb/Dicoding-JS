/*
1. Perhatikan kode berikut:

try {
    const arr = [1, 2, 3, 4];
    for (let i = 0; i <= 4; i++) {
        console.log(arr[i]);
    }
} catch(e) {
    console.log("Out of bounds");
}
Output yang akan dihasilkan ketika kode di atas dijalankan adalah...

A. Out of bounds

B. 1
   2
   3
   4

C. 1
   2
   3
   4
Out of bounds

D. 1
   2
   3
   4
   undefined

   KUNCI JAWABAN: D

   2. Perhatikan kode berikut:

   class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
   }

   try {
    throw new MyCustomError("This is an error");
     } catch (e) {
    console.log(e.message);
   }
    Output ketika kode di atas dijalankan adalah...

   A. MyCustomError
   B. This is an error
   C. MyError
   D. Aplikasi tidak bisa dijalankan

   KUNCI JAWABAN: B
  */

   
//KODE PROGRAM NO.1
try {
    const arr = [1, 2, 3, 4];
    for (let i = 0; i <= 4; i++) {
        console.log(arr[i]);
    }
} catch(e) {
    console.log("Out of bounds");
}


//KODE PROGRAM NO.2
class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    throw new MyCustomError("This is an error");
} catch (e) {
    console.log(e.message);
}