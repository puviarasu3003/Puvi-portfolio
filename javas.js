const sidebar = document.querySelector(".sidebar-content");

function menubarclick() {
  sidebar.style.display = "block";
}
function closebarclick() {
  sidebar.style.display = "none";
}
function submitone() {
  const form = document.querySelector("form");
  const box1 = document.getElementById("text1").value;
  const box2 = document.getElementById("text2").value;
  const box3 = document.getElementById("text3").value;
  const box4 = document.getElementById("text4").value;

  if (box1 === "" || box2 === "" || box3 === "" || box4 === "") {
    alert("Fill all Fields!");
  } else {
    alert("Success");
    form.reset();
  }
}
window.onload = function () {
  document.querySelector("#home").classList.add("show");
};
