function diceRoller() {
  const getInputValue = document.querySelector("#diceNum").value;
  const diceWrapper = document.querySelector(".dice");
  const values = [];
  const images = [];

  if (getInputValue == 1) {
    alert("Iltimos, 1 dan katta raqam kiriting!");
    return;
  }
  
  for (let i = 0; i < getInputValue; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src='./images/${value}.png' alt='dice:${value}' />`);
  }

  diceWrapper.innerHTML = images.join("");
}
