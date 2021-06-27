const in1 = document.getElementById("in1");
const add = document.getElementById("add");
const list = document.getElementById("list");

add.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = in1.value;
  list.appendChild(li);
  in1.value = "";
});
