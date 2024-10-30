const Joi = require("joi");

const validateFlat = (Flat) => {
    const schema = Joi.object({
        etaj: Joi.number().required(),
        condition: Joi.string().required(),
    })
    return schema.validate(Flat)
}

module.exports = { validateFlat }