import { Router } from "express";
import { adminOpsForProductsController } from "../controllers/products.controller";

class AdminOpsProductsRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  async initializeRoutes() {
    this.router
      .route("/category")
      .post(adminOpsForProductsController.createCategory);
   
      this.router
      .route("/:productId/approve")
      .patch(adminOpsForProductsController.approveProduct);
   
      this.router
      .route("/:productId/reject")
      .patch(adminOpsForProductsController.rejectProduct);
  }
}

export const adminOpsProductsRoutes = new AdminOpsProductsRoutes();
