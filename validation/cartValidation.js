const Joi = require("joi")

const validateCart = (cart) => {
    const schema = Joi.object({
        ticket_id: Joi.number().required(),
        customer_id: Joi.number().required(),
        createdAt: Joi.date(),
        fineshedAt: Joi.date(),
        status_id: Joi.number(),
    })
    return schema.validate(cart)
}

module.exports = { validateCart }