function calculate(operation) {
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();
    const resultElement = document.getElementById("result");
    const errorMessageElement = document.getElementById("error-message");
  
    
    errorMessageElement.textContent = "";
  
    
    if (!num1 || isNaN(num1) || !num2 || isNaN(num2)) {
      errorMessageElement.textContent = "Будь ласка, введіть правильні числа в обидва поля.";
      resultElement.textContent = "";
      return;
    }
  
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;
  
    
    switch (operation) {
      case "add":
        result = number1 + number2;
        break;
      case "subtract":
        result = number1 - number2;
        break;
      case "multiply":
        result = number1 * number2;
        break;
      case "divide":
        if (number2 === 0) {
          errorMessageElement.textContent = "Ділення на нуль неможливе.";
          resultElement.textContent = "";
          return;
        }
        result = number1 / number2;
        break;
    }
  
    
    result = Math.round(result * 100) / 100;
  
    
    resultElement.textContent = `${result}`;
  }