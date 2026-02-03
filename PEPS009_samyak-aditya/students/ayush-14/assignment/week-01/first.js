const btn = document.querySelector(".btn");
const countEl = document.querySelector(".count");

function createThrottleCounter() {
  let count = 0;
  let isThrottled = false;

  return function () {
    if (isThrottled) return;

    count++;
    countEl.innerText = count;

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, 1000);
  };
}

const throttledClick = createThrottleCounter();

btn.addEventListener("click", throttledClick);
