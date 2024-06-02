function calculateCost() {
    const serviceType = document.getElementById('serviceType').value;
    const materialCost = parseFloat(document.getElementById('materialCost').value);
    const laborHours = parseFloat(document.getElementById('laborHours').value);

    let laborCostPerHour;
    switch(serviceType) {
        case 'repair':
            laborCostPerHour = 100;
            break;
        case 'installation':
            laborCostPerHour = 150;
            break;
        case 'sewage':
            laborCostPerHour = 200;
            break;
        default:
            laborCostPerHour = 0;
    }

    const totalLaborCost = laborHours * laborCostPerHour;
    const totalCost = materialCost + totalLaborCost;

    document.getElementById('totalCost').innerHTML = `Całkowity koszt: <span>${totalCost.toFixed(2)} PLN</span>`;
}
