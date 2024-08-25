// script.js
async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Check if the amount is a valid number
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
        return;
    }

    try {
        // Fetch exchange rate from the API
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();

        const rate = data.rates[toCurrency];
        const result = amount * rate;

        // Display the result
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        document.getElementById('result').innerText = 'Error fetching exchange rate. Please try again later.';
    }
}
