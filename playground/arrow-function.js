const square = x => x * x;
console.log(square(9));

const user = {
  name: 'Vilson',
  sayHi: () => {
    console.log(`Hi. ${this.name}`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi. ${this.name}`);
  },
};

user.sayHi(1, 2, 3);
