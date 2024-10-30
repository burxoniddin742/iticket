const { Seat, Seat_type, Venue } = require("../models")
const { validateSeat } = require("../validation/seatValidation")

exports.createSeat = async (req, res) => {
    const { error } = validateSeat(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const seat = await Seat.create(req.body);
        res.status(201).send(seat);
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getSeat = async (req, res) => { 
    try {
        const seat = await Seat.findAll();
        res.status(200).send(seat)
    } catch (error) {
        res.status(500).send(err.message);
    }
};

exports.getSeatById = async (req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id,{
            include: [
                {
                    model: Seat_type,
                    as: "seatType",
                    attributes: ["id", "name"],
                },
                {
                    model: Venue,
                    as: "venues",
                }
            ]
        });
        if (!seat) return res.status(404).send("Seat not found")
        res.status(200).send(seat)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateSeat = async (req, res) => {
    const { error } = validateSeat(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const seat = await Seat.findByPk(req.params.id)
        if (!seat) return res.status(404).send("Seat not found");
        await seat.update(req.body);
        res.status(200).send(seat);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteSeat = async (req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id);
        if (!seat) return res.status(404).send("Seat not found")
        const seatData = seat.toJSON();
        await seat.destroy();
        res.status(204).send(seatData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};