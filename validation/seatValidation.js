const Joi = require("joi")

const validateSeat = (seat) => {
    const schema = Joi.object({
        sector: Joi.number().required(),
        row_number: Joi.number().required(),
        number: Joi.number(),
        venue_id: Joi.number(),
        seat_type_id: Joi.number(),
    })
    return schema.validate(seat)
}

module.exports = { validateSeat }