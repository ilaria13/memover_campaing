const play = document.querySelector(".play_button");
play.addEventListener("click", function () {
  document.querySelector("#videoBg").play();
  document.querySelector(".play_button").classList.add("hidden");
});
