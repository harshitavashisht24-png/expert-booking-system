const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  expertId: mongoose.Schema.Types.ObjectId,

  name: String,

  email: String,

  phone: String,

  date: String,

  timeSlot: String,

  notes: String,

  status: {
    type: String,
    default: "Pending",
  },
});

bookingSchema.index(
  {
    expertId: 1,
    date: 1,
    timeSlot: 1,
  },
  {
    unique: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);