const joke = document.getElementById("myJoke");
const btn = document.getElementById("myButton");
const link = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let grabJoke = () => {
  joke.classList.remove("show");
  fetch(link)
  .then(data => data.json())
  .then(item =>  {
    joke.textContent = `${item.joke}`;
    joke.classList.add("show");
  });
}

btn.addEventListener("click", grabJoke);
grabJoke();