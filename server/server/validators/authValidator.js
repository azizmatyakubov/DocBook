import Joi from 'joi'

export const doctorRegisterValidator = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(1).required(),
        surname: Joi.string().min(1).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        bio: Joi.string().optional(),
        role: Joi.string().valid('patient', 'doctor', 'admin').optional(),
        experience: Joi.number().required(),
        availability: Joi.array().optional(),
        specialization: Joi.string().required(),
        country: Joi.string().required(),
        department: Joi.string().optional()
    });
    return schema.validate(data);
}

export const patientRegisterValidator = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(1).required(),
        surname: Joi.string().min(1).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
    });
    return schema.validate(data);
}


export const loginValidator = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
    })
    return schema.validate(data);
}

