// Simple Calculator

// (function() {
//     this.result = document.getElementById("result");
//     this.buttons = document.querySelectorAll("button.operant");
//     this.equals = document.getElementById("equals");
//     this.clear = document.getElementById("clear");
//     for(var button of this.buttons){
//         button.addEventListener("click", function(event) {
//             result.innerText += event.currentTarget.innerText;
//         })
//     }

//     this.clear.addEventListener("click", function() {
//         document.getElementById("result").innerHTML = ""
//     });

//     this.equals.addEventListener("click", function() {
//         var rsult = result.innerText;
//         result.innerText = eval(rsult);
//     });

// })()









function Calculator () {
    var self = this;
    this.result = document.getElementById("result");
    this.buttons = document.querySelectorAll("button.operant");
    this.equals = document.getElementById("equals");
    this.arichmeticalOp = document.querySelectorAll("button.arich");
    this.clear = document.getElementById("clear");

    this.buttons.forEach(button => {
        button.addEventListener("click", addElementToDisplay)
    });

    this.arichmeticalOp.forEach(op => {
        op.addEventListener("click", addArichmeticalOp)
    })

    this.equals.addEventListener("click", evaluate);

    this.firstOperant;
    this.secondOperant;
    this.arhimeticalOperation;
    this.operantSelected = false;

    function addElementToDisplay ({currentTarget}) {
        if (!self.operantSelected) {
            self.result.innerText += currentTarget.innerText
        } else {
            self.result.innerText = currentTarget.innerText
        }
        self.operantSelected = false;
    }


    function addArichmeticalOp({currentTarget}) {
        if (!(self.arhimeticalOperation != undefined)) {
            self.firstOperant = parseInt(self.result.innerText);
            self.result.innerHTML = self.firstOperant;
            self.arhimeticalOperation = currentTarget.innerText
        } else {
            self.secondOperant = parseInt(self.result.innerText);
            self.firstOperant = eval(self.firstOperant+self.arhimeticalOperation+self.secondOperant);
            self.arhimeticalOperation = currentTarget.innerText
            self.result.innerHTML = self.firstOperant;
            self.secondOperant = undefined
        }
        self.operantSelected = true;
    }

    function evaluate() {
        self.secondOperant = parseInt(self.result.innerText);
        self.result.innerHTML = eval(self.firstOperant+self.arhimeticalOperation+self.secondOperant);
    }

    function clear () {
        self.firstOperant = undefined;
        self.secondOperant = undefined;
        self.arhimeticalOperation = undefined;
    }
}

var calculator = new Calculator();


















