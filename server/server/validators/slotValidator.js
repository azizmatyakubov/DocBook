import Joi from 'joi'

export const slotValidator = (data) => {
    const schema = Joi.object({
        day: Joi.string().required(),
        availableSlots: Joi.array().items(Joi.array().items(Joi.string().required())).required(),
    })
    return schema.validate(data);
}