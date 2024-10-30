const Joi = require("joi")

const validateCustomer_address = (customer_address) => {
    const schema = Joi.object({
        customer_id: Joi.number().required(),
        name: Joi.string().min(2).required(),
        country_id: Joi.number(),
        region_id: Joi.number(),
        district_id: Joi.number(),
        street: Joi.string(),
        house: Joi.string(),
        flat: Joi.number(),
        location: Joi.string(),
        post_index: Joi.string(),
        info: Joi.string(),
    })
    return schema.validate(customer_address)
}

module.exports = { validateCustomer_address }