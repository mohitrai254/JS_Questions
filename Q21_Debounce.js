function debounce(callback, delay) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}

function search() {
  console.log("API called");
}

const myDebounce = debounce(search, 2000);
