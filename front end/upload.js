// Handles image upload and communication with backend
export async function uploadImage(file) {
    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await fetch('http://localhost:5000/solve', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to process the image.');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        alert('Error uploading the image. Please try again.');
    }
}

// 5. solution.js
// Displays the solution returned by the backend
export function displaySolution(data) {
    const solutionDiv = document.getElementById('solution');

    if (!data || !data.steps) {
        solutionDiv.innerHTML = '<p>No solution found. Please try a different image.</p>';
        return;
    }

    solutionDiv.innerHTML = '<h2>Solution Steps</h2>';

    const stepsList = document.createElement('ul');
    data.steps.forEach((step, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Step ${index + 1}: ${step}`;
        stepsList.appendChild(listItem);
    });

    solutionDiv.appendChild(stepsList);
}
