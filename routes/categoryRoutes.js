import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryControlller,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes

//Crear categoria
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//Actualizar categoria
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//obtener todas las categorias
router.get("/get-category", categoryControlller);

//obtener una categoria
router.get("/single-category/:slug", singleCategoryController);

//eliminar categoria
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
