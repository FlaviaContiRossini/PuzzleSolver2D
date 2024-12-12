// Main JavaScript file for the app
import { uploadImage } from './upload.js';
import { displaySolution } from './solution.js';

// Root App Initialization
const app = document.getElementById('root');

const createAppUI = () => {
    app.innerHTML = `
        <h1>Puzzle Solver</h1>
        <div id="uploader">
            <input type="file" id="imageInput" accept="image/*" />
            <button id="solveButton">Upload and Solve</button>
        </div>
        <div id="solution"></div>
    `;

    document.getElementById('solveButton').addEventListener('click', async () => {
        const imageInput = document.getElementById('imageInput');
        if (imageInput.files.length === 0) {
            alert('Please upload an image.');
            return;
        }

        const file = imageInput.files[0];
        const result = await uploadImage(file);
        displaySolution(result);
    });
};
