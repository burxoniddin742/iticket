const { Payment } = require("../models")
const { validatePayment } = require("../validation/paymentValidation")

exports.createPayment = async (req, res) => {
    const { error } = validatePayment(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const payment = await Payment.create(req.body);
        res.status(201).send(payment);
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getPayment = async (req, res) => {
    try {
        const payment = await Payment.findAll();
        res.status(200).send(payment)
    } catch (error) {
        res.status(500).send(err.message);
    }
};

exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) return res.status(404).send("Payment not found")
        res.status(200).send(payment)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updatePayment = async (req, res) => {
    const { error } = validatePayment(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const payment = await Payment.findByPk(req.params.id)
        if (!payment) return res.status(404).send("Payment not found");
        await payment.update(req.body);
        res.status(200).send(payment);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deletePayment = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) return res.status(404).send("Payment not found")
        const paymentData = payment.toJSON();
        await payment.destroy();
        res.status(204).send(paymentData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};