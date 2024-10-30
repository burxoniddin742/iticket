const Joi = require("joi")

const validateTicket_type = (ticket_type) => {
    const schema = Joi.object({
        ticket_id: Joi.number().required(),
        color: Joi.string().required(),
        name: Joi.string().min(2),
    })
    return schema.validate(ticket_type)
}

module.exports = { validateTicket_type }