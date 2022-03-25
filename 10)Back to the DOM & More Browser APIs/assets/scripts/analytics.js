const intervalId=setInterval(() => {
  console.log("Hello there.....");
}, 2000);

document
  .getElementById("stop-analytics-btn")
  .addEventListener("click", () => clearTimeout(intervalId));
