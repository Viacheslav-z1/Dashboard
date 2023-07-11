
const openMenu = document.querySelector(".open__menu-btn");
const aside = document.querySelector(".aside");
const closeBbtn = document.querySelector(".close__menu");

openMenu.addEventListener('click', () => {

  if(!aside.classList.contains('active')){
    aside.classList.add("active");
  }
});


closeBbtn.addEventListener("click", () => {
  if (aside.classList.contains("active")) {
    aside.classList.remove("active");
  }
});




/**tabs */




let tabsProduct = document.querySelectorAll(".aside__tab");
let tabsContent = document.querySelectorAll(".dash__content");


tabsProduct.forEach((tab, i) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    hideTabsContent(tabsContent);
    showTab(tabsContent, i, tabsProduct);
    if (aside.classList.contains("active")) {
      aside.classList.remove("active");
    }
  });
});

hideTabsContent(tabsContent);
removeActiveTabs(tabsProduct);
showTab(tabsContent, 2, tabsProduct);






function hideTabsContent(arr) {
  arr.forEach((tab) => {
    tab.classList.add("none");
  });
}

function showTab(arr, index, tabs) {
  arr[index].classList.remove("none");
  removeActiveTabs(tabs);
  tabs[index].classList.add("active");
}

function removeActiveTabs(tabs) {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}