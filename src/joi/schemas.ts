import Joi from 'joi';

const userNameSchema = Joi.string().min(3)
  .required().messages({ 'string.min': '"username" is required' });
const passwordSchema = Joi.string().min(8)
  .required().messages({ 'string.min': '"password" is required' });

// const productNameSchema = Joi.string()
//   .required().messages({ 'string.min': '"name" is required' });
// const productStringMinSchema = Joi.string().min(3)
//   .required().messages({ 'string.min': '"name" length must be at least 3 characters long' });

// const productAmountSchema = Joi.string().min(1)
//   .required().messages({ 'string.min': '"amount" is required' });
// const productAmStringMinSchema = Joi.string().min(3)
//   .required().messages({ 'string.min': '"amount" length must be at least 3 characters long' });

const userLoginSchema = Joi.object({
  username: userNameSchema,
  password: passwordSchema,
});

// const productSchema = Joi.object({
//   name: productNameSchema,
//   amount: productAmountSchema,
// });

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export { userLoginSchema, productSchema };