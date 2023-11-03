const display = document.getElementById("display");
const buttons = document.getElementById("bottons");

buttons.addEventListener("click", (event) => {
    let target = event.target;
    if (target.innerHTML === "AC") {
        display.value = "";

    } else if (target.classList.contains("operater")) {

        let lastchar = display.value[display.value.length - 1];
        const operatorarray = ["*", "-", "+", "/", "%"]

        if (operatorarray.includes(lastchar)) {
            display.value = display.value.slice(0, -1) + target.innerHTML;
        }
        else {
            display.value += target.innerHTML
        }
    }
    else if (target.classList.contains("numbers")) {
        display.value += target.innerHTML;
    }
    else if (target.innerHTML === "=") {
        if (display.value.length !== 0) {
            try {
                display.value = eval(display.value)
            }
            catch (error) {
                display.value = "error!";
            }

        }
        else {
            display.value = eval(display.value);
        }

    }
    else if(target.innerHTML === "DEL") {
        display.value = display.value.slice(0,-1);
    }
});