const slideValue = document.querySelector(".rate-percent");
const inputSlider = document.querySelector(".rate-input");

inputSlider.oninput = () => {
  let value = inputSlider.value;
  slideValue.textContent = value + "%";
  slideValue.style.left = (value) + "%";
};

//Initial position
slideValue.style.left = (inputSlider.value) +"%";
slideValue.textContent = inputSlider.value + "%";
