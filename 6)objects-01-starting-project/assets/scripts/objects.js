// const movieList=document.getElementById('movie-list');
// // movieList.style.backgroundColor='red';
// movieList.style['background-color']='red';
// movieList.style.display='block'

// const userChoosenKeyName='level';

// const person = {
//   'first-name': "Srihari",  //rapping it into quotes can be made use as a property.
//   age: 30,
//   hobbies: ["Book Reading", "Sports"],
//   [userChoosenKeyName]:'dynamic-key',  //setting dynamic key
//   greet: function () {
//     alert("Hi there!");
//   },
//   1.5:'Hello'
// };

// delete person.age;  //deleting a property  clearing the property

// // person.age = 28;
// // person.age=null; //null->gonna use for reset
// // person.age=undefined; //undefined ->i am not gonna care on that property further.
// person.isAdmin = true; //adding new propety

// const keyName=person["first-name"];

// console.log(person["first-name"]); //accesing the rapped key in the objects.
// console.log(keyName);
// console.log(person) //properties expanded view will be in sorted in order in the console.Insertion order will be key normal in minimized view.

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((m => m.info.title.includes(filter)));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    if(!('info' in movie )){   // other way if(movie.info===undefined)
        // checking the property is available or not in the object
    }
    // movieEl.textContent=movie.info.title;
    const{info,...otherProps}=movie; //object detructuring
    console.log(otherProps);
    //const{title:movieTitle}=info; //movieTitle is the user defined objec destructuring
    let {getFormattedTitle}=movie;
    getFormattedTitle=getFormattedTitle.bind(movie);  //future purpose
    // let text = getFormattedTitle.call(movie,,) + "-";  //rightaway purpose parameters type differes btw apply and call
    //let text = getFormattedTitle.apply(movie,[]) + "-";  //rightaway purpose
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}:${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;
  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }
  const newMovie = {
    info: {
      title, //key name and value name is same use like this to set the properties
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle(){
       return this.info.title.toUpperCase();
    }
  };
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);

