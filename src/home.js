const homeComponent = (content) => {
    content.innerHTML = "";
    let h1 = document.createElement('h1');
    h1.innerText = "Best Tacos In Town";
    content.appendChild(h1);
}

export { homeComponent };