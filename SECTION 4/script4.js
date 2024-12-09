let employees = [];

document.getElementById('addEmployeeBtn').addEventListener('click', addEmployee);

function addEmployee() {
    const name = document.getElementById('name').value;
    const daysWorked = parseFloat(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deduction = parseFloat(document.getElementById('deduction').value);

    if (!name || daysWorked <= 0 || dailyRate <= 0 || deduction < 0) {
        alert('Please provide valid inputs for all fields. Days worked and daily rate must be positive numbers.');
        return;
    }
    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deduction;

    employees.push({
        name,
        daysWorked,
        dailyRate,
        grossPay,
        deduction,
        netPay
    });

    updateTable();

    document.getElementById('name').value = '';
    document.getElementById('daysWorked').value = '';
    document.getElementById('dailyRate').value = '';
    document.getElementById('deduction').value = '';
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById('payrollTable').querySelector('tbody');
    tableBody.innerHTML = '';

    employees.forEach((employee, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.daysWorked}</td>
            <td>${employee.dailyRate}</td>
            <td>${employee.grossPay.toFixed(2)}</td>
            <td>${employee.deduction.toFixed(2)}</td>
            <td>${employee.netPay.toFixed(2)}</td>
            <td><button onclick="deleteEmployee(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}
