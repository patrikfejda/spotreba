const distances = [1, 10, 100, 1000];

document.addEventListener('DOMContentLoaded', function() {
    initializeCostTable();
    calculateCosts();
});

document.getElementById('fuelConsumption').addEventListener('input', function() {
    document.getElementById('fuelConsumptionValue').textContent = this.value + 'l / 100km';
    calculateCosts();
});

document.getElementById('pricePerLiter').addEventListener('input', function() {
    document.getElementById('pricePerLiterValue').textContent = '€' + this.value + ' / liter';
    calculateCosts();
});

document.getElementById('tripDistance').addEventListener('input', calculateCosts);

function initializeCostTable() {
    let tableHTML = '';

    distances.forEach(distance => {
        tableHTML += `<tr id="rowFor${distance}km"><td class="border px-4 py-2">${distance} km</td><td class="border px-4 py-2" id="costFor${distance}km">-</td></tr>`;
    });

    document.getElementById('costTable').innerHTML = tableHTML;
}

function calculateCosts() {
    const fuelConsumption = document.getElementById('fuelConsumption').value;
    const pricePerLiter = document.getElementById('pricePerLiter').value;
    const tripDistance = document.getElementById('tripDistance').value || null;

    distances.forEach(distance => {
        const costElementId = `costFor${distance}km`;
        const cost = (distance / 100) * fuelConsumption * pricePerLiter;
        document.getElementById(costElementId).textContent = `€${cost.toFixed(2)}`;
    });

    if (tripDistance) {
        const tripCost = (tripDistance / 100) * fuelConsumption * pricePerLiter;
        document.getElementById('tripCost').textContent = `€${tripCost.toFixed(2)}`;
    } else {
        document.getElementById('tripCost').textContent = '-';
    }
}
