const Joi = require("joi")

const validateCustomer_card = (customer_card) => {
    const schema = Joi.object({
        customer_id: Joi.number().required(),
        name: Joi.string().min(2).required(),
        phone: Joi.string(),
        number: Joi.string(),
        month: Joi.string(),
        year: Joi.string(),
        is_active: Joi.boolean(),
        is_main: Joi.boolean(),
    })
    return schema.validate(customer_card)
}

module.exports = { validateCustomer_card }