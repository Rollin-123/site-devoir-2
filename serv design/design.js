



let allGridItems = [...document.getElementsByClassName("grid-item")];
let popupBg = document.getElementById("design__popup_bg");
let popupImg = document.getElementById("design__popup_img");

const openPopup = (e) => {
 let gridItemClicked = e.target.closest(".grid-item");
  let clickedImageName = gridItemClicked.id;
  popupBg.classList.add("active");
  popupImg.src = `../images/img_design/${clickedImageName}.png`;
};

const closePopup = () => {
  popupBg.classList.remove("active");
};

allGridItems.forEach((el) => el.addEventListener("click", openPopup));

popupImg.addEventListener("click", (e) => e.stopPropagation());
popupBg.addEventListener("click", closePopup);
