import Joi from 'joi';

const userNameSchema = Joi.string().min(3)
  .required().messages({ 'string.min': '"username" is required' });
const passwordSchema = Joi.string().min(8)
  .required().messages({ 'string.min': '"password" is required' });

const userLoginSchema = Joi.object({
  username: userNameSchema,
  password: passwordSchema,
});

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export { userLoginSchema, productSchema, userSchema };