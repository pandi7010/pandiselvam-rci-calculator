// Calculate Resistance
function calculateResistance() {
    let resistance = document.getElementById('resistanceValue').value;
    let tolerance = 0.05; // Assuming 5% tolerance
    let minResistance = resistance * (1 - tolerance);
    let maxResistance = resistance * (1 + tolerance);

    let result = `Resistance: ${resistance} Ω (Tolerance: ±5%)\nMin: ${minResistance.toFixed(2)} Ω, Max: ${maxResistance.toFixed(2)} Ω`;
    document.getElementById('resistorResult').innerText = result;
}

// Calculate Capacitance
function calculateCapacitance() {
    let capacitance = document.getElementById('capacitanceValue').value;
    let charge = capacitance * 5; // For demo purposes, let's assume Voltage = 5V
    let result = `Capacitance: ${capacitance} µF (Voltage: 5V)\nCharge: ${charge.toFixed(2)} µC`;
    document.getElementById('capacitorResult').innerText = result;
}

// Calculate Inductance
function calculateInductance() {
    let inductance = document.getElementById('inductanceValue').value;
    let energy = 0.5 * inductance * Math.pow(2, 2); // Assume current is 2A
    let result = `Inductance: ${inductance} mH (Current: 2A)\nEnergy Stored: ${energy.toFixed(2)} mJ`;
    document.getElementById('inductorResult').innerText = result;
}
