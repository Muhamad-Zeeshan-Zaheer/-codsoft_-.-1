const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');

const special = ["%", "*", "/", "-", "+", "="];

let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && btnValue !== " ") {
        if (output.endsWith("+") || output.endsWith("-") || output.endsWith("*") || output.endsWith("/")) {
            input.value = "Error";
            return;
        }
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "Del") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && special.includes(btnValue)) {
            return;
        }
        output += btnValue;
    }
    input.value = output;
};

// Add event listener to buttons
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

