var Apka = /** @class */ (function () {
    function Apka() {
        this.start();
    }
    Apka.prototype.start = function () {
        this.getInputs();
        this.checkValues();
    };
    Apka.prototype.getInputs = function () {
        this.input1 = document.querySelector('#input1');
        this.input2 = document.querySelector('#input2');
        this.input3 = document.querySelector('#input3');
        this.input4 = document.querySelector('#input4');
        this.sum_input = document.querySelector('#sum');
        this.min_input = document.querySelector('#min');
        this.max_input = document.querySelector('#max');
        this.avg_input = document.querySelector('#avg');
    };
    Apka.prototype.checkValues = function () {
        var _this = this;
        this.input1.addEventListener('input', function () { return _this.getCalculatedValues(); });
        this.input2.addEventListener('input', function () { return _this.getCalculatedValues(); });
        this.input3.addEventListener('input', function () { return _this.getCalculatedValues(); });
        this.input4.addEventListener('input', function () { return _this.getCalculatedValues(); });
    };
    Apka.prototype.getCalculatedValues = function () {
        var value1 = +this.input1.value;
        var value2 = +this.input2.value;
        var value3 = +this.input3.value;
        var value4 = +this.input4.value;
        var sum = value1 + value2 + value3 + value4;
        var min = Math.min(value1, value2, value3, value4);
        var max = Math.max(value1, value2, value3, value4);
        var avg = sum / 4;
        this.showResults(sum, avg, min, max);
    };
    Apka.prototype.showResults = function (sum, avg, min, max) {
        this.sum_input.value = sum.toString();
        this.min_input.value = min.toString();
        this.max_input.value = max.toString();
        this.avg_input.value = avg.toString();
    };
    return Apka;
}());
;
var app = new Apka();
