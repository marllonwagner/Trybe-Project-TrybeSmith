import { NextFunction, Request, Response } from 'express';
import { userSchema } from '../joi/schemas';

const isUserFieldsValid = async (req: Request, res: Response, next: NextFunction) => {
  const reqBody = req.body;
  const { error } = userSchema.validate(reqBody);
  const emptyFields = error?.message.includes('allowed');
  const notMinLength = error?.message.includes('must');
  const fieldName = error?.details[0].path;

  if (notMinLength) {
    return res.status(422).json({ message: error?.message });
  }

  if (emptyFields) {
    return res.status(400).json({ message: `"${fieldName}" is required` });
  }

  return next();
};

export default isUserFieldsValid;