document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '115b60448fe6946e19cd10b0'; // Replace with your ExchangeRate-API key
  
    // Get the HTML elements by their IDs
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const resultDisplay = document.getElementById('result');
    const convertButton = document.getElementById('convert');
  
    // Convert currency when the button is clicked
    convertButton.addEventListener('click', () => {
      const amount = parseFloat(amountInput.value);
      const fromCurrency = fromCurrencySelect.value;
      const toCurrency = toCurrencySelect.value;
  
      // Check if the amount is a valid number
      if (isNaN(amount)) {
        resultDisplay.textContent = 'Please enter a valid amount';
        return;
      }
      
      // Construct the API request URL
      const conversionUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;
  

      // Make the API request
      fetch(conversionUrl)
        .then(response => response.json())
        .then(data => {
          const convertedAmount = data.conversion_result;
          resultDisplay.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        })
        // Handle any errors that occur during the fetch request
        .catch(error => {
          resultDisplay.textContent = 'Error converting currency';
          console.error('Error:', error);
        });
    });
  });