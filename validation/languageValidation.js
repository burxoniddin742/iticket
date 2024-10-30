const Joi = require("joi");

const validateLanguage = (Language) => {
    const schema = Joi.object({
        language: Joi.string().required(),
        description: Joi.string().required(),
    })
    return schema.validate(Language)
}
module.exports = { validateLanguage }