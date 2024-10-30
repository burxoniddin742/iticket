const Joi = require("joi")

const validateCustomer = (customer) => {
    const schema = Joi.object({
        first_name: Joi.string().min(2).required(),
        last_name: Joi.string().min(2).required(),
        phone: Joi.string().required(),
        hashed_password: Joi.string(),
        email: Joi.string(),
        birth_date: Joi.date(),
        fineshed: Joi.date(),
        gender: Joi.string(),
        lang_id: Joi.number(),
        hashed_refresh_token: Joi.string(),
    })
    return schema.validate(customer)
}

module.exports = { validateCustomer }