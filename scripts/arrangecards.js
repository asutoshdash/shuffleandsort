(function() {
  const colorPalletee = ["#6F98A8", "#2B8EAD", "#72C3DC", "#BFBFBF", "#2F454E"];
  window.addEventListener("load", () => {
    const cardContainer = document.createDocumentFragment();
    let colorpalleteCntr = 0;
    for (let i = 0; i < 9; i++) {
      let cardElem = document.createElement("div");
      cardElem.classList.add("card");
      cardElem.style.backgroundColor = colorPalletee[colorpalleteCntr++];
      cardElem.innerHTML = `${i + 1}`;
      cardContainer.append(cardElem);
      if (colorpalleteCntr >= 5) {
        colorpalleteCntr = 0;
      }
    }
    document.querySelector(".cardcontainer").append(cardContainer);
  });
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const shuffle = function() {
    document.querySelectorAll(".card").forEach(cardElem => {
      cardElem.style.order = getRandomInt(9);
    });
  };
  const sort = function() {
    document.querySelectorAll(".card").forEach(cardElem => {
      cardElem.style.order = "initial";
    });
    window.CardAreenger = {
      shuffle: shuffle,
      sort: sort
    };
  };
})();
