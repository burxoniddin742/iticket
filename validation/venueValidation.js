const Joi = require("joi")

const validateVenue = (venue) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        address: Joi.string().required(),
        location: Joi.string().required(),
        site: Joi.string(),
        phone: Joi.string(),
        venue_type_id: Joi.number(),
        house: Joi.string(),
        region_id: Joi.number(),
        district_id: Joi.number(),
    })
    return schema.validate(venue)
}

module.exports = { validateVenue }