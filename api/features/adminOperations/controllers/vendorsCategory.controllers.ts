import { Request, Response } from "express";
import { STATUS_CODES, handleErrorResponse } from "../../../utils";
import { adminOpsVendorsCategoryService } from "../services/vendorsCategory.service";
import { validateadminVendorsOps } from "../validators/adminVendorsOps.validate";

class AdminOpsVendorsCategoryController {
  async createCategory(req: Request, res: Response) {
    try {
    await validateadminVendorsOps.createCategory(req.body);
      const category = await adminOpsVendorsCategoryService.createCategory(
        req.body
      );
      return res.status(STATUS_CODES.CREATED).json({
        message: "Successful",
        data: { category },
      });
    } catch (error: any) {
      return handleErrorResponse(res, error);
    }
  }

  async createSubCategory(req: Request, res: Response) {
    try {
        await validateadminVendorsOps.createSubCategory(req.body)
      const subCategory =
        await adminOpsVendorsCategoryService.createSubCategory(req.body);
      return res.status(STATUS_CODES.CREATED).json({
        message: "Successful",
        data: { subCategory },
      });
    } catch (error: any) {
      return handleErrorResponse(res, error);
    }
  }
}

export const adminOpsVendorCategoryController =
  new AdminOpsVendorsCategoryController();
