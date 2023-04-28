function buttonPressed(value) {
  var input = document.getElementById("input");
  if (input.value.length >= 13) {
    alert("Too many digits!");
    return;
  }
  input.value += value;

  // var num = num.replace(/\D/g, '');
  if (input.value.includes(".") != true) {
    var num = input.value.replaceAll(",", "");
    var num = num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    input.value = num;
  }
}
  
  function clearAllInput() {
    document.getElementById("input").value = "";
    document.getElementById("previousInput").value = "";
    input1 = ""
  }

  function clearInput() {
    document.getElementById("input").value = "";
  }

  let operator = ""
  
  function operatorPressed(value) {
    //let users to add up like 5 + 5 + 5...
    if (operator != "" && input.value != "") {
      calculate()
      operator = ""
    }

    //in case users mis-pressed an operator.
    if (document.getElementById("input").value != "") {
      operator = value
      input1 = input.value
      document.getElementById("input").value = "";
      document.getElementById("previousInput").value = input1;
    } else {
      operator = value
    }
  }

  function calculate() {
    input2 = input.value
    var num1 = Number(input1.replaceAll(",", ""))
    var num2 = Number(input2.replaceAll(",", ""))
    switch (operator) {
    case "+":
      var result = num1 + num2;
      break;
    case "-":
      var result = num1 - num2;
      break;
    case "*":
      var result = num1 * num2;
      break;
    case "/":
      var result = num1 / num2;
      break;
    }
    operator = ""
    //
    result = result.toString()
    if (result.includes(".")) {
      var resultPart1 = result.substr(0, result.indexOf("."));
      var resultPart2 = result.substr(result.indexOf(".") + 1);
      resultPart1 = resultPart1.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      var resultFinal = resultPart1 + "." + resultPart2
    } else {
      resultFinal = result.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    document.getElementById("input").value = resultFinal
  }
  