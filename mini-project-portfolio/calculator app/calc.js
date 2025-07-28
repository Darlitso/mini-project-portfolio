const display = document.getElementById('display');
let currentInput = '';

        function appendValue(val) {
            if (currentInput === '0' && val !== '.') {
                currentInput = '';
            }
            currentInput += val;
            display.textContent = currentInput;
        }

        function clearDisplay() {
            currentInput = '';
            display.textContent = '0';
        }

        function deleteLast() {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
        }

        function calculateResult() {
            try {
                // Evaluate the expression
                let result = eval(currentInput.replace(/÷/g, '/').replace(/×/g, '*'));
                display.textContent = result;
                currentInput = result.toString();
            } catch {
                display.textContent = 'Error';
                currentInput = '';
            }
        }
  