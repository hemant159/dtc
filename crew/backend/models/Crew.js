const mongoose = require("mongoose");

const CrewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shift: { type: String, enum: ["morning", "afternoon", "evening"], required: true },
  tempShift: { type: String, enum: ["morning", "afternoon", "evening"], default: null }, // Temporary shift
  tempShiftDate: { type: String, default: null }, // Date for the temporary shift
  nextWeekShift: { type: String, enum: ["morning", "afternoon", "evening"], default: null },
  status: { type: String, enum: ["active", "assigned", "resting"], default: "active" },
  assignedBus: { type: mongoose.Schema.Types.ObjectId, ref: "Bus", default: null }, // Bus ObjectId
  assignedBusVehicleId: { type: String, default: null }, // Vehicle ID of the assigned bus
  lastAssignedBus: { type: mongoose.Schema.Types.ObjectId, ref: "Bus", default: null },
  restUntil: { type: String, default: null },
  shiftStartTime: { type: String, required: true },
  shiftEndTime: { type: String, required: true },
  currentShiftStartDate: { type: String, required: true }
});

const Crew = mongoose.model("Crew", CrewSchema);
module.exports = Crew;
