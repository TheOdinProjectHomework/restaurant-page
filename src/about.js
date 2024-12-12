let aboutUs = "Welcome to Holy Taco, home of the best tacos in town! Our passion for fresh ingredients, bold flavors, and authentic recipes makes every bite unforgettable. Whether you're craving classic street tacos or creative flavor combinations, we've got something to satisfy every taco lover. Come taste the difference!"
const aboutComponent = (content) => {
    content.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.innerHTML = aboutUs;
    content.appendChild(h2);
}

export { aboutComponent };