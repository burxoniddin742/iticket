const Joi = require("joi")

const validateCountry = (country) => {
    const schema = Joi.object({
        country: Joi.string().min(2).required(),
    })
    return schema.validate(country)
}

module.exports = { validateCountry }