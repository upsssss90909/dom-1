let stat = document.querySelector("p");
let add = document.querySelector("#add");

let friend = false;

add.addEventListener("click", function () {
  if (!friend) {
    stat.innerHTML = "friends 🩷";
    stat.style.color = "green"
    add.innerHTML = "remove friend";
  } else {
    stat.innerHTML = "stranger 😔";
    stat.style.color = "red"
    add.innerHTML = "add friend";
  }
  friend = !friend;
});
