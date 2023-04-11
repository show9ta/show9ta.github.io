// ボタンが押されたときの処理
function buttonPressed(value) {
    document.getElementById("input").value += value;
  }
  
  // Cボタンが押されたときの処理
  function clearInput() {
    document.getElementById("input").value = "";
  }
  
  // =ボタンが押されたときの処理
  function calculate() {
    var input = document.getElementById("input").value;
    var operatorRegex = /[+\-*/]/g; // 演算子を表す正規表現
    var numbers = input.split(operatorRegex); // 数字の配列を作成
    var operators = input.match(operatorRegex); // 演算子の配列を作成
    var result = parseFloat(numbers[0]); // 最初の数字を初期値に設定
  
    for (var i = 0; i < operators.length; i++) {
      var number = parseFloat(numbers[i + 1]);
      var operator = operators[i];
      switch (operator) {
        case "+":
          result += number;
          break;
        case "-":
          result -= number;
          break;
        case "*":
          result *= number;
          break;
        case "/":
          result /= number;
          break;
      }
    }
  
    document.getElementById("input").value = result;
  }
  