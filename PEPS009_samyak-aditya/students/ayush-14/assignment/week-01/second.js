const text = document.getElementById("text");
const count = document.getElementById("char-count");

text.addEventListener("input", () => {
  const len = text.value.length;

  count.innerText = len + " / 100";

  count.style.color = len > 100 ? "red" : "black";
});

