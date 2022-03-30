// const ids =new Set([1,2,3]);
//ids.add(2); //duplicates are not inserted

// const ids =new Set(['Hi','from','set']);
// ids.delete('Hi')
// for(const e of ids.entries()){
//     console.log(e[0]);
// }

// const person1={name:'Srihari'};
// const person2={name:'Lakshminarasimhan'};

// const personData=new Map([[person1,[{date:'yesterday',price:10}]]]);

// personData.set(person2,[{date:'yesterday',price:100}]);

// console.log(personData);
// console.log(personData.get(person1));

// for(const [key,value] of personData.entries()){
//     console.log(key,value);
// }

// for(const key of personData.keys()){
//     console.log(key);
// }


// for(const value of personData.values()){
//     console.log(value);
// }

// console.log( personData.size); // size of maps

let  person={name:'Srihari'};
const persons=new WeakSet(); //Used for garbage collection automatically
persons.add(person); 

//...some operation
// person=null;

console.log(persons); 

const personData =new Map();
personData.set(person,'Extra info!');

person=null;

console.log(personData);