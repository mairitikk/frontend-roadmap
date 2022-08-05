function add(num1, num2){
    var result;
    result= num1 + num2;
    return result;
  }
  function subtract(num1, num2){
    
    var result;
    result= num1 - num2;
    return result;
  }
  function multiply(num1, num2){
    var result;
    result= num1*num2;
    return result;
  }
  
  function calculate(num1, num2, operation){
    var result;
    var num1;
    var num2;
    var operation;
    result= operation(num1, num2);
    return result;
  }
  //addin function callbacks
  