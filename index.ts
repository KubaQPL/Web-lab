class Apka {
Input1: HTMLInputElement
Input2: HTMLInputElement
Input3: HTMLInputElement
Input4: HTMLInputElement

sum_input: HTMLInputElement
min_input: HTMLInputElement
max_input: HTMLInputElement     
avg_input: HTMLInputElement

constructor(){
    this.start();
}
    
start(){
    this.getInputs();
    this.chVal();

}

getInputs(){
this.Input1 = document.querySelector("#input1");
this.Input2 = document.querySelector("#input2");
this.Input3 = document.querySelector("#input3");
this.Input4 = document.querySelector("#input4");
this.sum_input = document.querySelector("sum")
this.sum_input = document.querySelector("min")
this.sum_input = document.querySelector("max")
this.sum_input = document.querySelector("avg")
}

chVal(){

}


}

const app = new Apka();