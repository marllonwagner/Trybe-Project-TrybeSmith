import { NextFunction, Request, Response } from 'express';
import { orderSchema } from '../joi/schemas';

const isOrderFieldsValid = async (req: Request, res: Response, next: NextFunction) => {
  const reqBody = req.body;
  const { error } = orderSchema.validate(reqBody);
  const emptyFields = error?.message.includes('allowed');
  const notMinLength = error?.message.includes('must');
  const notNumberArray = error?.message.includes('contain');
  const fieldName = error?.details[0].path;
  const statusCode = error?.details[0].type === 'any.required' ? 400 : 422;
  
  if (notNumberArray) {
    return res.status(statusCode).json({ message: `"${fieldName}" must include only numbers` });
  }
  
  if (notMinLength) {
    return res.status(statusCode).json({ message: error?.message });
  }

  if (emptyFields) {
    return res.status(statusCode).json({ message: `"${fieldName}" is required` });
  }

  return next();
};

export default isOrderFieldsValid;