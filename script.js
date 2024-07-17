let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleInput(e.target.innerHTML);
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleInput("=");
    } else if (e.key === "Escape") {
        handleInput("AC");
    } else if (e.key === "Backspace") {
        handleInput("Del");
    } else if ("0123456789+-*/.".includes(e.key)) {
        handleInput(e.key);
    }
});

function handleInput(input) {
    if (input === "=") {
        try {
            string = eval(string);
        } catch {
            string = "Error";
        }
        document.querySelector('input').value = string;
    } else if (input === "AC") {
        string = "";
        document.querySelector('input').value = string;
    } else if (input === "Del") {
        string = string.slice(0, -1);
        document.querySelector('input').value = string;
    } else {
        string += input;
        document.querySelector('input').value = string;
    }
}
