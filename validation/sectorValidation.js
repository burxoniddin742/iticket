const Joi = require("joi");

const validateSector = (Sector) => {
    const schema = Joi.object({
        sector_name: Joi.string().required(),
    })
    return schema.validate(Sector)
}

module.exports = { validateSector }