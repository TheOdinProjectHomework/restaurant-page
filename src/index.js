import "./styles.css";
import { homeComponent } from "./home";
import { aboutComponent } from "./about";

console.log("dev server started");
console.log("Run: npx webpack serve");

let content = document.getElementById("content");

let buttons = document.getElementsByTagName("nav");
let btnArray = Array.of(buttons[0].children);
console.log(btnArray[0]);

const handleButton = () => {
    for( let i = 0; i < btnArray[0].length; i++ ) {
        btnArray[0][i].addEventListener( 'click', () => {
            handleButtonClick(btnArray[0][i].innerHTML);
        })
    }
}

const handleButtonClick = (name) => {
    console.log(`button clicked: ${name}`);
    if(name === "Home") {
        homeComponent(content);
    } else if(name === "About") {
        aboutComponent(content);
    }
}

homeComponent(content);
handleButton();