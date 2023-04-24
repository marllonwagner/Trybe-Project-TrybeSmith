import Joi from 'joi';

const userNameSchema = Joi.string().min(3)
  .required().messages({ 'string.min': '"username" is required' });
const passwordSchema = Joi.string().min(8)
  .required().messages({ 'string.min': '"password" is required' });

const userLoginSchema = Joi.object({
  username: userNameSchema,
  password: passwordSchema,
});

export default userLoginSchema;