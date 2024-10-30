const Joi = require("joi");

const validateStatus = (Status) => {
    const schema = Joi.object({
        status: Joi.string().required(),
    })
    return schema.validate(Status)
}

module.exports = { validateStatus }