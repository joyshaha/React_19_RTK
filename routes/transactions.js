const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");
// const auth = require("../middleware/auth");

// Get all transactions (No role restriction)
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find({}, { __v: 0, createdAt: 0 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new transaction (No role restriction)
router.post("/", async (req, res) => {
  const { name, type, amount } = req.body;
  try {
    const transaction = new Transaction({
      name,
      type,
      amount,
    });

    await transaction.save();
    res.status(201).json({
        message: "Transaction created",
        transaction,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get transaction by ID (No role restriction)
router.get("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id, { __v: 0 });
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update transaction (No role restriction)
router.put("/:id", async (req, res) => {
  try {
    const updates = {};
    if (req.body.name) updates.name = req.body.name;
    if (req.body.type) updates.type = req.body.type;
    if (req.body.amount) updates.amount = req.body.amount;

    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Delete transaction (No role restriction)
router.delete("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
