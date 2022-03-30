const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};
//asyc and await can be used only in function. async wraps whole func into a single promise.
//await can be included before any promise.
async function trackUserHandler() {
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  //let positionData;
  //  getPosition()
  //   .then((posData) => {
  //     positionData = posData;
  //     // console.log(posData);
  //     return setTimer(2000);
  //   })
  //   .catch((err) => {
  //     // catch in middle of the promise chain continues to execute after the catch block .
  //     console.log(err);
  //     return "on we go....";
  //   })
  //   .then((data) => {
  //     console.log(data, positionData);
  //   });
  // navigator.geolocation.getCurrentPosition(
  //   (posData) => {
  //     // setTimeout(() => {
  //     //   console.log(posData);
  //     // }, 2000);
  //     setTimer(2000).then(data=>{
  //       console.log(data,posData);
  //     });
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
  setTimer(1000).then(
    () => {
      console.log("Timer Done...");
    } /* 0/*2005*/
  );
  console.log("Getting position.....");
}

button.addEventListener("click", trackUserHandler);

//race only cares on the fastest function
Promise.race([getPosition(), setTimer(1000)]).then(data=>{
  console.log(data);
});

//all has the combination of all the functions (used when we need to wait for all promises)
//one of the promises fails (rejected) will not wait for all and handled with catch block
Promise.all([getPosition(), setTimer(1000)]).then(promiseData=>{
  console.log(promiseData);
});

//This waits for all the promises to get result and stores the combination of all promises as a summary .
Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData=>{
  console.log(promiseData);
});

// let result=0;

// for(i=0;i<10000000;i++) {
//   result=result+i;
// }
// console.log(result)
