const in1 = document.getElementById("in1");
const add = document.getElementById("add");
const list = document.getElementById("list");
const list2 = document.getElementById("list2");

const onclickadd = () => {
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

  const button3 = document.createElement("button");
  button3.classList.add("return");
  button3.textContent = "戻す";

  button2.addEventListener("click", () => {
    list2.appendChild(li);
    li.removeChild(button);
    li.removeChild(button2);
    li.appendChild(button3);
  });

  button3.addEventListener("click", () => {
    list.appendChild(li);
    li.removeChild(button3);
    li.appendChild(button);
    li.appendChild(button2);
  });
};

add.addEventListener("click", () => onclickadd());
