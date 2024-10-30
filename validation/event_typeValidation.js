const Joi = require("joi")

const validateEvent_type = (event_type) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        parent_event_type_id: Joi.number().required(),
    })
    return schema.validate(event_type)
}

module.exports = { validateEvent_type }