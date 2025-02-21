import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5001;

// Middleware to parse JSON
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  console.log("Webhook received:", req.body);
  res.status(200).json({ message: "Webhook received successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});