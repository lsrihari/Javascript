// const numbers=[1,2,3];
// console.log(numbers)

// const moreNumbers=new Array(5); //takes 5 as a size 
// console.log(moreNumbers);


// const moreNumbers1=new Array(5,2); //takes 5,2 as a elements in array and size as 2
// console.log(moreNumbers1);

// const yetMoreNumbers= Array.of(1,2);
// console.log(yetMoreNumbers) //takes 1,2 as a elements in array and size as 2

// const moreNumbers=Array.from('Hi!'); //h,i,! are elements of array
//  console.log(moreNumbers);

//  const li=document.querySelectorAll('li');
// console.log(li);

// const moreNumbers=Array.from(li); ///coverting to real array from array like/iterables
//  console.log(moreNumbers); 


//  const personalData=[30,'Max',{moreDetail:[]}];

//  const analytics=[[1,2,3],[4,5,6]];

//  for(const d of analytics){//Multi-D array 
//      for(const s of d){
//          console.log(s);
//      }
//  }

// const hobbies=['Cooking','Sports'];

// hobbies.push('s1');//pushing at the end
// hobbies.unshift('s2');// pushing front
// console.log(hobbies);
// hobbies.pop();
// console.log(hobbies);
// //hobbies.shift();//shift all element to left and deletes the first element 
// console.log(hobbies);
// hobbies.splice(1,2,'Good Food','Carrot') // param1 ->choose index; param2 -> how many element to delete from there ; param3-n ->elements to be inserted
// console.log(hobbies);
// hobbies.splice(1,1);// param1 ->choose index; param2 -> how many element to delete from there ;
// console.log(hobbies);
// hobbies.splice(-1,1); // negative index checks on the right of the array 
// console.log(hobbies);
// hobbies.splice(0);// deletes all  item from array if without count 
// console.log(hobbies);


// const testResults=[1,5,2,3,7,4,8,4,69];
// console.log(testResults.includes(69)); //returns true if element available in the array
// //const storedResult=testResults.slice();//copy al the element of the array
// //const storedResult=testResults.slice(1,5); //copies from 2nd index till (5-1)th index size 5
//   const storedResult=testResults.concat([12,55]); //adds elemnts with the array at the end(merges twoo array)
// testResults.push(5.33);
// //const storedResult=testResults.slice(-3,-2); 
// //const storedResult=testResults.slice(3); //adds all elements from index 3
// console.log(storedResult,testResults);
// //console.log(testResults.indexOf(4));//retiurns the first index of element 4 
// console.log(testResults.lastIndexOf(4));//retiurns the first index of element 4 from right 
 
// const personData=[{name:'Srihari'},{name:'Lakshminarasimhan'}];
// console.log(personData.indexOf({name:'Lakshminarasimhan'})); //cannot match object returns -1

// const srihari=personData.find((person,idx,persons)=>{
//     return person.name==='Srihari';
// });
// console.log(srihari);
// srihari.name='Kasthurirangan';
// console.log(srihari,personData)// find works on reference 
 
// const lakshminarasimhan=personData.findIndex((person,idx,persons)=>{
//     return person.name==='Lakshminarasimhan';
// });
// console.log(lakshminarasimhan);//returns the index of the object

// const prices =[2.3,44.5,232.5,322,67.44];
// const tax=0.19;
// // const taxAdjustedPrice=[];


// // for(const p of prices){
// //     taxAdjustedPrice.push(p*(1+tax));
// // }
// // prices.forEach((price,idx,prices)=>{
// //     const priceObj={index:idx,taxAdjPrice:price*(1+tax)}
// //     taxAdjustedPrice.push(priceObj);
// // }); //To create an object array 

// const taxAdjustedPrice=prices.map((price,idx,prices)=>{
//     const priceObj={index:idx,taxAdjPrice:price*(1+tax)}
//     return priceObj;
// }); //To create an object array with map 

// // console.log(prices, taxAdjustedPrice);

// const sortedPrices=prices.sort((a,b)=>{
//     if(a>b){
//         return 1;
//     }else if(a===b){
//         return 0;
//     }else{
//         return -1;
//     }
// });//doubt
// console.log(sortedPrices);
// // console.log(sortedPrices.reverse());//reverses the array

// const filteredArray=prices.filter((price,idx,prices)=>{
//     return price>100;
// });

// // const filteredArray=prices.filter(price => price>100);//short form

// console.log(filteredArray);
 
// // let sum=0;
// // prices.forEach(price =>sum+=price);
// // console.log(sum);

// // const sum=prices.reduce((prevValue,curValue,curIndex,prices)=>{
// //     return prevValue+curValue;
// // },0);
// const sum=prices.reduce((prevValue,curValue)=>prevValue+curValue,0);
// console.log(sum);

// const data ='sri;hari;l;61;22';
// const transformData=data.split(';'); 
// transformData[3]=+transformData[3];//instead of parsing at integer
// console.log(transformData);

// const nameFragments=['Srihari','Lakshminarasimhan'];
// //const name = nameFragments.join(); //default it users ',' to join
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragments=[...nameFragments]; //new array copied from old array 
// nameFragments.push('V');
// console.log(nameFragments,copiedNameFragments);

// console.log(Math.min(1,23,5));
// // console.log(Math.min(prices)); //returns NaN
// console.log(Math.min(...prices));


// const persons=[{name:'Srihari',age:23},{name:'Lakshminarasimhan',age:69}];
// // const copiedPersons=[...persons]; //refrenced copy

// const copiedPersons =persons.map(person=>({
//     name:person.name,
//     age:person.age
// })); //value copy

// persons.push({name:'Kasthurirangan',age:26});

// persons[1].age=68; // since this obj is referenced in copieed array it reflects in the copied array also 

// console.log(persons,copiedPersons);

const nameData=['Srihari','Lakshminarasimhan','V',28];
// const fstName=nameData[0];
// const lstName=nameData[1];
const [fstName,lstName,...otherinfo]=nameData;
console.log(fstName ," -",lstName,'\n',otherinfo);