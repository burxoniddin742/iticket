const { Cart, Customer, Status, Ticket, } = require("../models")
const { validateCart } = require("../validation/cartValidation")

exports.createCart = async (req, res) => {
    const { error } = validateCart(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const cart = await Cart.create(req.body);
        res.status(201).send(cart);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findAll();
        res.status(200).send(cart)
    } catch (error) {
        res.status(500).send(err.message);
    }
};

exports.getCartById = async (req, res) => {
    try {
        const cart = await Cart.findByPk(req.params.id, {
            include: [
                {
                    model: Ticket,
                    as: "cart_ticket_id"
                },
                {
                    model: Customer,
                    as: "cart_customer_id"
                },
                {
                    model: Status,
                    as: "cart_status_id"
                },
            ]
        });

        if (!cart) return res.status(404).send("Cart not found")
        res.status(200).send(cart)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateCart = async (req, res) => {
    const { error } = validateCart(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const cart = await Cart.findByPk(req.params.id)
        if (!cart) return res.status(404).send("Cart not found");
        await cart.update(req.body);
        res.status(200).send(cart);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteCart = async (req, res) => {
    try {
        const cart = await Cart.findByPk(req.params.id);
        if (!cart) return res.status(404).send("Cart not found")
        const cartData = cart.toJSON();
        await cart.destroy();
        res.status(204).send(cartData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};