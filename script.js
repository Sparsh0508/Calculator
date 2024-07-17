let string = "";
let resultDisplayed = false;
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
    if (resultDisplayed && "0123456789".includes(input)) {
        string = "";
        resultDisplayed = false;
    }
    
    if (input === "=") {
        try {
            string = eval(string).toString();
        } catch {
            string = "Error";
        }
        document.querySelector('input').value = string;
        resultDisplayed = true;
    } else if (input === "AC") {
        string = "";
        document.querySelector('input').value = string;
        resultDisplayed = false;
    } else if (input === "Del") {
        string = string.slice(0, -1);
        document.querySelector('input').value = string;
        resultDisplayed = false;
    } else {
        string += input;
        document.querySelector('input').value = string;
        resultDisplayed = false;
    }
}
