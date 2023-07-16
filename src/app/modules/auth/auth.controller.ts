import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendApiResponse";
import httpStatus from "http-status";
import { AuthService } from "./auth.service";

const createUser = catchAsync(async (req: Request, res: Response) => {
  {
    const { ...userData } = req.body;
    const result = await AuthService.createUser(userData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User Created Successfully",
      data: result,
    });
  }
});

export const AuthController = {
  createUser,
};
