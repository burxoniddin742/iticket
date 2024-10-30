const Joi = require("joi");

const validateGender = (Gender) => {
    const schema = Joi.object({
        name: Joi.string().required(),
    })
    return schema.validate(Gender)
}

module.exports = { validateGender }