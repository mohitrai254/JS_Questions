const input = document.getElementById("input_id");
const button = document.getElementById("button_id");
const title = document.getElementById("title");
const price = document.getElementById("price");
const description = document.getElementById("description");

async function getData(id) {
  let promise = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await promise.json();
}

button.addEventListener("click", async () => {
  let id = input.value;
  let result = await getData(id);
  title.innerText = result.title;
  price.innerText = result.price;
  description.innerText = result.description;
});
