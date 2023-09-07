/*
let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80

/*
Output:
50.24
80
*/

  /*
  const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
  }
  
  console.log(hitungLuasLingkaran(4)); // 50.24
  console.log(hitungLuasLingkaran(4)); // 50.24
  console.log(hitungLuasLingkaran(8)); // 200.96
  console.log(hitungLuasLingkaran(8)); // 200.96

  /*
  Output:
  50.24
  50.24
  200.96
  200.96
  */

  /*
  const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person,
    newPerson
  });
  
  /**
   * Output:
   *  {
        person: { name: 'Bobo', age: 18 },
        newPerson: { name: 'Bobo', age: 18 }
      }
  */

      const createPersonWithAge = (age, person) => {
        return { ...person, age };
      };
      
      const person = {
        name: 'Bobo'
      };
      
      const newPerson = createPersonWithAge(18, person);
      
      console.log({
        person,
        newPerson
      });
      
      /**
       * Output:
       { person: { name: 'Bobo' }, newPerson: { name: 'Bobo', age: 18 } }
      */