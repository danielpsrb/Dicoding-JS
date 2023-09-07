/*
const profile = {
    firstName: "Daniel",
    lastName: "Pasaribu",
    age: 21
  }
   
  const { firstName, lastName, age } = profile;
   
  console.log(firstName, lastName, age);

  /* output:
Daniel Pasaribu 21
*/

/*
const profile = {
    firstName: "Daniel",
    lastName: "Pasaribu",
    age: 21
  }
   
  let firstName = "Dimas";
  let age = 20;
   
  // menginisialisasi nilai baru melalui destructuring object
  ({ firstName, age } = profile);
   
  console.log(firstName);
  console.log(age);

  /* output:
  Daniel
  21
  */

  /*
  const profile = {
    firstName: "Dans",
    lastName: "Psrb",
    age: 21
  }
   
   
  const { firstName, age, isMale } = profile;
   
  console.log(firstName)
  console.log(age)
  console.log(isMale)
   
  /* output:
  Dans
  21
  undefined
  */

  /*
  const profile = {
    firstName: "Dans",
    lastName: "Psrb",
    age: 21
  }
   
   
  const { firstName, age, isMale = true } = profile;
   
  console.log(firstName)
  console.log(age)
  console.log(isMale)
   
  /* output:
  John
  18
  true
  */

  
  const profile = {
    firstName: "Daniel",
    lastName: "Pasaribu",
    age: 21
  }
   
  const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
   
  console.log(localFirstName);
  console.log(localLastName);
  console.log(localAge);
   
   
  /*Output:
  Daniel
  Pasaribu
  21
  */