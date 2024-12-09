document.querySelector('#tax').addEventListener('submit', function(event) {
  event.preventDefault();

  let income = parseFloat(document.querySelector('#form_input').value);
  let tax_result = document.querySelector('#tax_result');

  if (isNaN(income) || income <= 0) {
      tax_result.textContent = "Please enter a valid income greater than 0.";
      tax_result.style.color = 'red';
      return;
  }

  let tax = calculateIncomeTax(income);
  tax_result.textContent = `You will pay a tax of P${tax.toFixed(2)}`;
  tax_result.style.color = 'green';
});

function calculateIncomeTax(income) {
  let tax = 0;

  if (income <= 250000) {
      tax = 0;
  } else if (income <= 400000) {
      tax = (income - 250000) * 0.20;
  } else if (income <= 800000) {
      tax = 30000 + (income - 400000) * 0.25;
  } else if (income <= 2000000) {
      tax = 130000 + (income - 800000) * 0.30;
  } else if (income <= 8000000) {
      tax = 490000 + (income - 2000000) * 0.32;
  } else {
      tax = 2410000 + (income - 8000000) * 0.35;
  }

  return tax;
}
