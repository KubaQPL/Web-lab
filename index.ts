class Apka{
    input1: HTMLInputElement;
    input2: HTMLInputElement;
    input3: HTMLInputElement;
    input4: HTMLInputElement;

    sum_input: HTMLInputElement;
    avg_input: HTMLInputElement;
    min_input: HTMLInputElement;
    max_input: HTMLInputElement;

    constructor(){
        this.start();
    }

    start(){
        this.getInputs();
        this.checkValues();
    }

    getInputs(){
        this.input1 = document.querySelector('#input1');
        this.input2 = document.querySelector('#input2');
        this.input3 = document.querySelector('#input3');
        this.input4 = document.querySelector('#input4');
        this.sum_input = document.querySelector('#sum');
        this.min_input = document.querySelector('#min');
        this.max_input = document.querySelector('#max');
        this.avg_input = document.querySelector('#avg');
    }

    checkValues(){
        this.input1.addEventListener('input', () => this.getCalculatedValues());
        this.input2.addEventListener('input', () => this.getCalculatedValues());
        this.input3.addEventListener('input', () => this.getCalculatedValues());
        this.input4.addEventListener('input', () => this.getCalculatedValues());
    }

    getCalculatedValues(){
        const value1 = +this.input1.value;
        const value2 = +this.input2.value;
        const value3 = +this.input3.value;
        const value4 = +this.input4.value;

        const sum = value1 + value2 + value3 + value4;
        const min = Math.min(value1,value2,value3,value4);
        const max = Math.max(value1,value2,value3,value4);
        const avg = sum/4

        this.showResults(sum,avg,min,max);
    }

    showResults(sum: number, avg: number, min:number, max:number){
        this.sum_input.value = sum.toString();
        this.min_input.value = min.toString();
        this.max_input.value = max.toString();
        this.avg_input.value = avg.toString();
    }
};

const app = new Apka();