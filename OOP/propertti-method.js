/*
class Car {
 constructor(brand, color, maxSpeed, chassisNumber) {
   this.brand = brand;
   this.color = color;
   this.maxSpeed = maxSpeed;
   this.chassisNumber = chassisNumber;
 }
}
 
const car1 = new Car('BMW', 'red', 200, 'b-1');
const car2 = new Car('Audi', 'blue', 220, 'a-1');
const car3 = new Car('BMW', 'black', 250, 'b-2');

console.log(car1);
console.log(car2);
console.log(car3);
 
/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'b-1' }
Car {
  brand: 'Audi',
  color: 'blue',
  maxSpeed: 220,
  chassisNumber: 'a-1'
}
Car {
  brand: 'BMW',
  color: 'black',
  maxSpeed: 250,
  chassisNumber: 'b-2'
}
*/

/*
class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      // Set a random chassis number
      this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }
  }
   
  const car1 = new Car('BMW', 'red', 200);
  const car2 = new Car('Audi', 'blue', 220);
  const car3 = new Car('BMW', 'black', 250);
   
  console.log(car1);
  console.log(car2);
  console.log(car3);
   
  /* Output:
  Car {
  brand: 'BMW',
  color: 'red',
  maxSpeed: 200,
  chassisNumber: 'BMW-446'
  }
  Car {
  brand: 'Audi',
  color: 'blue',
  maxSpeed: 220,
  chassisNumber: 'Audi-403'
  }
  Car {
  brand: 'BMW',
  color: 'black',
  maxSpeed: 250,
  chassisNumber: 'BMW-694'
  }
  */

  /*
  class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }
   
  const car = new Car('BMW', 'red', 200);
  car.chassisNumber = 'BMW-1';
   
  console.log(car);
   
  /* Output:
  Car {
  brand: 'BMW',
  color: 'red',
  maxSpeed: 200,
  chassisNumber: 'BMW-1'
  }
  */

  /*
  class User {
    constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
   
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
   
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
   
  const user = new User('John', 'Doe');
  console.log(user);
  console.log(user.fullName);
   
  user.fullName = 'Fulan Fulanah';
  console.log(user);
  console.log(user.fullName);
   
  /* Output:
  User { firstName: 'John', lastName: 'Doe' }
  John Doe
  User { firstName: 'Fulan', lastName: 'Fulanah' }
  Fulan Fulanah
  */

  /*
  class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }
   
    get chassisNumber() {
      return this._chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
  }
   
  const car = new Car('BMW', 'red', 200);
  console.log(car.chassisNumber);
  car.chassisNumber = 'BMW-1';
  console.log(car.chassisNumber);
   
  /* Output:
  BMW-232
  you are not allowed to change the chassis number
  BMW-232
  */

  class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = this._generateChassisNumber();
    }
   
    get chassisNumber() {
      return this._chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
   
    // Methods
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn(direction) {
      console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }
   
    _generateChassisNumber() {
      return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }
   
  const car = new Car('BMW', 'red', 200);
   
  console.log(car._chassisNumber);
  car._chassisNumber = 'BMW-1';
  console.log(car._chassisNumber);
  console.log(car._generateChassisNumber());
   
  /* Output:
  BMW-545
BMW-1
BMW-219
  */