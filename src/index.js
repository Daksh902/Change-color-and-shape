import "./styles.css";
document.getElementById("btn1").addEventListener("click", function () {
  const appDiv = document.getElementById("app");
  appDiv.style.backgroundColor = "green";
});

document.getElementById("btn2").addEventListener("click", function () {
  const innerDiv = document.getElementById("inner");

  innerDiv.style.width = "0";
  innerDiv.style.height = "0";
  innerDiv.style.backgroundColor = "transparent";
  innerDiv.style.borderLeft = "0px solid transparent";
  innerDiv.style.borderRight = "100px solid transparent";
  innerDiv.style.borderBottom = "120px solid #fff";
});
