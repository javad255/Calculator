
const monitor = document.getElementById("monitor");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";  // چیزی که روی مانیتور نمایش داده می‌شود
let resultShown = false; // برای جلوگیری از ادامه ورودی بعد از نمایش نتیجه

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerHTML;

        switch(value){
            case "C":
                currentInput = "";
                monitor.innerHTML = "";
                break;
            case "CE":
                currentInput = currentInput.slice(0, -1);
                monitor.innerHTML = currentInput;
                break;
            case "=":
                try {
                    // تبدیل نمادهای ریاضی به جاوااسکریپت
                    let expression = currentInput
                        .replace(/×/g, "*")
                        .replace(/÷/g, "/")
                        .replace(/√/g, "Math.sqrt")
                        .replace(/x <sup>2<\/sup>/g, "**2")
                        .replace(/1\/x/g, "(1/");

                    const result = eval(expression);
                    monitor.innerHTML = result;
                    currentInput = result.toString();
                    resultShown = true;
                } catch {
                    monitor.innerHTML = "Error";
                    currentInput = "";
                }
                break;
            case "&radic;":
                currentInput += "√";
                monitor.innerHTML = currentInput;
                break;
            case "x <sup>2</sup>":
                currentInput += "x <sup>2</sup>";
                monitor.innerHTML = currentInput;
                break;
            case "1/<sub>x</sub>":
                currentInput += "1/x";
                monitor.innerHTML = currentInput;
                break;
            default:
                if(resultShown){
                    currentInput = "";
                    resultShown = false;
                }
                currentInput += value;
                monitor.innerHTML = currentInput;
                break;
        }
    });
});


const switchBtn = document.getElementById("switchStyle");
const calculator = document.querySelector(".container");

switchBtn.addEventListener("click", () => {
    calculator.classList.toggle("iphone");
});

