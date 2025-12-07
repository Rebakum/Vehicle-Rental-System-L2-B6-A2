import { NextFunction, Request, Response } from "express";
import { authServies } from "./authServices";

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authServies.registerUser(req.body);
    res.status(201).json({
      success: true,
      message: " User registered successfully",
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const result = await authServies.loginUser(email, password);
    res.status(201).json({
      success: true,
      message: " Login successful",
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const authControllers = {
  signin,
  signup,
};
