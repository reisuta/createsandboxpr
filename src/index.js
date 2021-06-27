const in1 = document.getElementById("in1");
const add = document.getElementById("add");
const list = document.getElementById("list");

add.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = in1.value;
  list.appendChild(li);
  in1.value = "";

  const button = document.createElement("button");
  button.classList.add("remove");
  button.textContent = "削除";
  li.appendChild(button);

  const button2 = document.createElement("button");
  button2.classList.add("solve");
  button2.textContent = "終了";
  li.appendChild(button2);

  button.addEventListener("click", () => {
    list.removeChild(li);
  });

  button2.addEventListener("click", () => {
    li.classList.add("delete");
  });
});
