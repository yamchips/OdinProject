const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// add a p 
const newP = document.createElement("p");
newP.textContent = "Hey I'm red!";
newP.style.cssText = "color: red;";
container.appendChild(newP);

// add an h3
const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.cssText = "color: blue;";
container.appendChild(h3);

// add a div
const div = document.createElement("div");
div.style.cssText = "border: 1px solid black; background-color: pink;";
const h1 = document.createElement("h1");
const divP = document.createElement("p");
h1.textContent = "I'm in a div";
divP.textContent = "ME TOO!";
div.appendChild(h1);
div.appendChild(divP);
container.appendChild(div);

// event, method 2
const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello world!");

// event, method 3
btn.addEventListener("click", function (e) {
    // console.log(e.target);
    e.target.style.background = "blue";
});

function alertFunction() {
    alert("You did it!!");
}

// choose multiple buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click",
        () => alert(button.id)
    );
});