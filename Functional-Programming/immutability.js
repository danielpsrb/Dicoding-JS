/*
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({
    names,
    newNamesWithExcMark,
});

/**
 * {
     names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
     newNamesWithExcMark: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
   }
 */

   /*
   const user = {
   firstname: 'Harry',
   lastName: 'Protter', // ups, typo!
  }

   const renameLastNameUser = (newLastName, user) => {
   user.lastName = newLastName;
  }

   renameLastNameUser('Potter', user);

   console.log(user);

   /**
   * output:
   * { firstname: 'Harry', lastName: 'Potter' }
   * 
   */

   const user = {
   firstname: 'Harry',
   lastName: 'Protter', // ups, typo!
  }

   const createUserWithNewLastName = (newLastName, user) => {
   return { ...user, lastName: newLastName }
  }

   const newUser = createUserWithNewLastName('Potter', user);

   console.log(newUser);

  /**
  * output:
  * { firstname: 'Harry', lastName: 'Potter' }
  * 
  */