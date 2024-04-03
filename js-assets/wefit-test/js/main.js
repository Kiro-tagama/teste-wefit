const menu = document.getElementById("menu");
const buttonsMenu = menu.getElementsByTagName("button");

menu.style.display = "flex";
menu.style.flexDirection = "row";
menu.style.gap = "10px";
menu.style.justifyContent = "start"
menu.style.flexWrap = "wrap"

buttonsMenu[1].style.minWidth = "120px"

for (let i = 0; i < buttonsMenu.length; i++) {
    buttonsMenu[i].style.borderRadius = "4px"
    buttonsMenu[i].style.width = "min-content"
    buttonsMenu[i].style.flexGrow = "0";
}

/////

const header = document.getElementById("header")
const buttonsHeader = header.getElementsByTagName("a");

header.style.textAlign="right"
header.classList.add("bg-secondary","text-light")
buttonsHeader[0].classList.add("btn-success")

/////

const card = document.getElementsByClassName("card")
const greenButton = card[1].getElementsByTagName("a")
greenButton[0].classList.add("btn-success")