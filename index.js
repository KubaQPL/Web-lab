var Apka = /** @class */ (function () {
    function Apka() {
        this.start();
    }
    Apka.prototype.start = function () {
        this.getInputs();
        this.chVal();
    };
    Apka.prototype.getInputs = function () {
        this.Input1 = document.querySelector("#input1");
        this.Input2 = document.querySelector("#input2");
        this.Input3 = document.querySelector("#input3");
        this.Input4 = document.querySelector("#input4");
        this.sum_input = document.querySelector("sum");
        this.sum_input = document.querySelector("min");
        this.sum_input = document.querySelector("max");
        this.sum_input = document.querySelector("avg");
    };
    Apka.prototype.chVal = function () {
    };
    return Apka;
}());
var app = new Apka();
