function calculateLoan() {
    loanAmount = document.getElementById("loan-amount").value;
    interestRate = document.getElementById("interest-rate").value;
    monthsToPay = document.getElementById("months-to-pay").value;
    result = document.getElementById("payment");

    interest = (loanAmount * (interestRate * 0.01)) / monthsToPay;
    monthlyPayment = (loanAmount / monthsToPay + interest).toFixed(2);

    result.innerHTML = `Monthly Payment: ${monthlyPayment}`;
}   