const express = require("express");
const router = express.Router();
const TeamMember = require("../models/TeamMember");

// Get all team members
router.get("/", async (req, res) => {
  try {
    const members = await TeamMember.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new team member
router.post("/", async (req, res) => {
  try {
    const member = new TeamMember({
      name: req.body.name,
      status: req.body.status,
    });

    const savedMember = await member.save();
    res.status(201).json(savedMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update member status
router.put("/:id", async (req, res) => {
  try {
    const updatedMember = await TeamMember.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    res.json(updatedMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;