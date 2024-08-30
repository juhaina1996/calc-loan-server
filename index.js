const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001; // Port for the API server

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy data for interest rates
const interestRates = [
  { id: 1, rate: 10.5 },
  { id: 2, rate: 14.0 },
  { id: 3, rate: 12.5 },
];

// Route to get interest rates
app.get("/api/interest-rates", (req, res) => {
  res.json(interestRates);
});

// Route to submit loan details
app.post("/api/loan-details", (req, res) => {
  const { amount, term, rate, monthlyPayment } = req.body;
  // Normally, you'd save this to a database
  console.log("Received loan details:", { amount, term, rate, monthlyPayment });
  res.status(201).json({ message: "Loan details submitted successfully" });
});

// Start the server
app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
