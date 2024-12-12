# Puzzle Solver Web App

The Puzzle Solver Web App is designed to analyze and solve 2D physical puzzles from images. It detects puzzle pieces, matches edges, and provides step-by-step solutions for assembling puzzles. This document explains how to set up, use, and extend the application.

---

## Features
- **Upload Images**: Upload images of unsolved puzzles via a web interface.
- **Piece Detection**: Automatically detects and segments puzzle pieces.
- **Edge Matching**: Matches puzzle pieces based on edge similarity.
- **Solution Steps**: Outputs step-by-step instructions for assembling the puzzle.

---

## Setup Instructions

### Prerequisites
1. Python 3.9 or above.
2. Node.js (for running the frontend if needed).
3. pip (Python package manager).

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/puzzle-solver-web-app.git
cd puzzle-solver-web-app
```

### 2. Backend Setup
1. Navigate to the `backend/` directory.
```bash
cd backend
```
2. Install dependencies.
```bash
pip install -r requirements.txt
```
3. Run the backend server.
```bash
python app.py
```
4. The server will run at `http://localhost:5000` by default.

### 3. Frontend Setup
1. Navigate to the `frontend/` directory.
```bash
cd frontend
```
2. Install dependencies.
```bash
npm install
```
3. Start the frontend development server.
```bash
npm start
```
4. Open your browser and go to `http://localhost:3000`.

---

## Usage Instructions

### Uploading an Image
1. Navigate to the web app in your browser (`http://localhost:3000`).
2. Click on the **Upload Image** button.
3. Select an image file of the unsolved puzzle (formats supported: `.png`, `.jpg`, `.jpeg`).
4. Click **Upload and Solve**.

### Viewing the Solution
1. After uploading, the backend processes the image to detect pieces and compute the solution.
2. The solution steps will be displayed on the webpage, detailing how to assemble the puzzle.

---

## Testing

### Unit Tests
Run unit tests for the puzzle-solving logic:
```bash
python -m unittest tests/test_solver.py
```

### Integration Tests
Run tests for the backend API:
```bash
python -m unittest tests/test_api.py
```

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature-name'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact
For questions or suggestions, please contact Flavia Conti Rossini.

