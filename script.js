
    const display = document.getElementById('display');
    const erroSound = document.getElementById('erroSound');
    const okSound = document.getElementById('okSound');

    function press(num) {
      display.value += num;
    }

    function clearDisplay() {
      display.value = '';
    }

    function calculate() {
      try {
        if (display.value.trim() === "") {
          throw "empty";
        }
        display.value = eval(display.value);
        
      } catch {
        display.value = "Ainda não sou advinho🙃";
      }
    }