let code = "";
var tone1 = new Audio("../audio/tone1.mp3");
var tone2 = new Audio("../audio/tone2.mp3");
var tone3 = new Audio("../audio/tone3.mp3");
var tone4 = new Audio("../audio/tone4.mp3");

var disabled = false;

let secrets = ['2006', '1999'];

function addNumber(number) {
    if(disabled == false) {
        code += number;
        document.getElementById("code").textContent = code;
        tone1.volume = 0.5;
        tone1.play()

     if (code.length > 3) {
        disabled = true

        if (secrets.includes(code)) {
            tone3.play()
                        setTimeout(() => {
                            window.open(code, '_blank');
                            disabled = false
                            code = "";
                            document.getElementById("code").textContent = "Enter code...";
                        }, 1000)
      } else {
        tone4.play()
        document.getElementById("code").textContent = "ACCESS DENIED";

                        setTimeout(() => {
                            disabled = false
                            code = "";
                            document.getElementById("code").textContent = "Enter code...";
                        }, 1000)
      }
    } else {
        tone1.play()
    }

    }
}

function backspace() {
    code = code.slice(0, -1);
    document.getElementById("code").textContent = code || "Enter code...";
    tone2.volume = 0.25;
    tone2.play()
}
