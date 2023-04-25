import { NextFunction, Request, Response } from 'express';
import { userLoginSchema, productSchema } from '../joi/schemas';

const isLoginFieldsValid = async (req: Request, res: Response, next: NextFunction) => {
  const reqBody = req.body;
  const { error } = userLoginSchema.validate(reqBody);
  const err = error;
  if (!err) return next();
  if (err.message.includes('required')) return res.status(400).json({ message: err.message });
};

const isProductFieldsValid = async (req: Request, res: Response, next: NextFunction) => {
  const reqBody = req.body;
  const { error } = productSchema.validate(reqBody);
  const emptyFields = error?.message.includes('allowed');
  const not3Length = error?.message.includes('must');
  const fieldName = error?.details[0].path;

  if (not3Length) {
    return res.status(422).json({ message: error?.message });
  }

  if (emptyFields) {
    return res.status(400).json({ message: `"${fieldName}" is required` });
  }

  return next();
};

export { isLoginFieldsValid, isProductFieldsValid };
