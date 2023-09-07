/*
function init() {
    const name = 'Daniel Pasaribu';   // Variabel lokal di dalam scope fungsi init
      
    function greet() {      // Inner function, merupakan contoh closure
      console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }
  
    greet();
  }
  
  init();
  
  /* output
  Halo, Daniel Pasaribu
   */

  /*
  function init() {
    const name = 'Daniel Pasaribu';
  
    function greet() {
      console.log(`Halo, ${name}`);
    }
  
    return greet;
  }
  
  const myFunction = init();
  myFunction();
  
  /* output
  Halo, Daniel Pasaribu
   */

  /*
  let counter = 0;

  const add = () => {
  return ++counter;
 }

 console.log(add());
 console.log(add());
 counter = 23;
 console.log(add());

 /* output
 1
 2
 24
 */

 const add = () => {
    let counter = 0;
      return () => {
        return ++counter;
    };
  }
  
  const addCounter = add();
  
  console.log(addCounter());
  console.log(addCounter());
  console.log(addCounter());
  
  /* output
  1
  2
  3
  */