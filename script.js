document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');

    // Ensure results div is visible
    resultsDiv.style.display = 'block';

    // Remove non-digit characters for validation
    const cleanInput = input.replace(/[\s()-]/g, '');

    // Check for valid length and first digit conditions
    if ((cleanInput.length === 10) || (cleanInput[0] === '1' && cleanInput.length === 11 && cleanInput[1] !== '-')) {
        // Valid number
        resultsDiv.innerHTML += `<p style="color: black;">Valid US number: ${input}</p>`;
    } else {
        // Invalid number
        resultsDiv.innerHTML += `<p style="color: red;">Invalid US number: ${input}</p>`;
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    // Clear the results history
    const resultsDiv = document.getElementById('results-div');
    resultsDiv.innerHTML = '';
    // Hide the results div when cleared
    resultsDiv.style.display = 'none';
});
