class Calculator {
    set(value = 0) {
      this.value = value;
    }
    add(operationValue) {
      return (this.value += operationValue);
    }
    sub(operationValue) {
      return (this.value -= operationValue);
    }
    mult(operationValue) {
      return (this.value *= operationValue);
    }
    div(operationValue) {
      return (this.value /= operationValue);
    }
  }
  const calculator = new Calculator();
  
  module.exports = calculator;