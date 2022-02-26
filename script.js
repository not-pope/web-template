// $("return-to-top").addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// });
// Array.prototype.forEach.call($c("classname"), (element) => {});

function $(x) {
  return document.getElementById(x);
}
function $c(x) {
  return document.getElementsByClassName(x);
}

console.log("Hello World!");
