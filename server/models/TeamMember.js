const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Available", "Busy", "Away"],
      default: "Available",
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "members" }
);

module.exports = mongoose.model("TeamMember", teamMemberSchema);