const router = require("express").Router();

const Booking = require("../models/Booking");

module.exports = (io) => {

  router.post("/", async (req, res) => {

    try {

      const booking = await Booking.create(req.body);

      io.emit("slotBooked", {
        expertId: req.body.expertId,
        date: req.body.date,
        timeSlot: req.body.timeSlot,
      });

      res.json({
        success: true,
        message: "Booking Successful",
      });

    } catch (err) {

      res.status(400).json({
        message: "Slot already booked",
      });
    }
  });

  router.get("/", async (req, res) => {

    const bookings = await Booking.find({
      email: req.query.email,
    });

    res.json(bookings);
  });

  router.patch("/:id/status", async (req, res) => {

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    res.json(booking);
  });

  return router;
};