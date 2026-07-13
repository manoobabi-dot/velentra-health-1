window.onload = function () {
  const button = document.querySelector(".hero button");

  if (button) {
    button.onclick = function () {
      alert("Welcome to Velentra Health! Thank you for visiting.");
    };
  }
};