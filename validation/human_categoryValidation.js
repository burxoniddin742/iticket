const Joi = require("joi")

const validateHuman_category = (human_category) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        start_age: Joi.string().required(),
        finish_age: Joi.string(),
        gender_id: Joi.number(),
    })
    return schema.validate(human_category)
}

module.exports = { validateHuman_category }