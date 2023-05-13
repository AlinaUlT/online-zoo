const radioBox = document.querySelector(".amountBox");
const radios = document.querySelectorAll(".radioButton");
const texts = document.querySelectorAll(".amountText");
const amountInput = document.querySelector(".anotherAmountInput");

radioBox.addEventListener("click", (evt) => {
  for (let btn of radios) {
    let rect = btn.getBoundingClientRect();
    if (Math.abs(evt.clientX - rect.x) <= 60
      && Math.abs(evt.clientY - rect.y) <= 60) {
      btn.click();
      for (let text of texts) {
        text.classList.remove("focusedAmount");
        if (text.textContent.endsWith(btn.id)) {
          text.classList.add("focusedAmount");
        }
      }
      break;
    }
  }
});

amountInput.addEventListener("input", (evt) => {
  console.log(evt)
  if (amountInput.value.length > 4) {
    amountInput.value = amountInput.value.slice(0, 4);
  }
});
