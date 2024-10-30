const Joi = require("joi");

const validatePayment = (Payment) => {
    const schema = Joi.object({
        name: Joi.string().required(),
    })
    return schema.validate(Payment)
}

module.exports = { validatePayment }