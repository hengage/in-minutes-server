import { Request, Response } from "express";
import { customersRepo } from "../repo/customers.repo";
import { STATUS_CODES, generateJWTToken } from "../../../utils";

class CustomersController {
  async signup(req: Request, res: Response) {
    try {
      const customer = await customersRepo.signup(req.body);
      const jwtPayload = {
        _id: customer._id,
        phoneNumber: customer.phoneNumber,
      };

      const accessToken = generateJWTToken(jwtPayload, "1h");
      const refreshToken = generateJWTToken(jwtPayload, "14d");
      res.status(STATUS_CODES.CREATED).json({
        message: "Success",
        data: {
          customer: { _id: customer._id },
          accessToken,
          refreshToken,
        },
      });
    } catch (error: any) {
      res.status(error.status || STATUS_CODES.SERVER_ERROR).json({
        message: "Failed",
        error: error.message || "Server error",
      });
    }
  }
}

export const customersController = new CustomersController();
