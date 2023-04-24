import { NextFunction, Request, Response } from 'express';
import userLoginSchema from '../joi/schemas';

const isLoginFieldsValid = async (req: Request, res: Response, next: NextFunction) => {
  const reqBody = req.body;
  const { error } = userLoginSchema.validate(reqBody);
  const err = error;
  if (!err) return next();
  if (err.message.includes('required')) return res.status(400).json({ message: err.message });
};

export default isLoginFieldsValid;
