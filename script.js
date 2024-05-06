document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');

    // Check if the input is empty
    if (input.trim() === '') {
        alert('Please provide a phone number');
        return; // Stop further execution
    }

    // Make the results div visible
    resultsDiv.style.display = 'block';

    // Refined regular expression to validate the phone number format
    const validFormat = /^(1[\s-]?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    // Test if the input matches the refined phone number format
    const isValidFormat = validFormat.test(input);

    // Check for valid number format
    if (isValidFormat) {
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