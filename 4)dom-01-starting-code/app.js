// const listItemsElemetnts= document.getElementsByTagName('li');
// const listItemsElemetnts1= document.querySelectorAll('li');
// for(const l of listItemsElemetnts1 ){
//     console.dir(l);
// }
// const li= document.querySelector('li:last-of-type');
// li.textContent='Happy'

// const  ul = document.body.firstElementChild.nextElementSibling;
// const firstLi=ul.firstElementChild;

// console.log(ul);

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
});
