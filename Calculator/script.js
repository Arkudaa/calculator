
class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.clear()
    }

  clear(){
    
  }

  delete(){

  }

  appendNumber(number){

  }

  chooseOperation(operation){

  }

  compute(){

  }

  getDisplayNumber(number){

  }

  updateDisplaey(){
    
  }


}


const numberButtons=document.querySelectorAll("[data-number]")
const operationButtons=document.querySelectorAll("[data-operation]")
const equalsButton=document.querySelectorAll("[data-equals]")
const deleteButton=document.querySelectorAll("[data-delete]")
const allClearButton=document.querySelectorAll("[data-all-clear]")
const previousOperandTextElement=document.querySelector("[data-previous-operand]")
const currentOperandTextElement=document.querySelector("[data-current-operand]")













