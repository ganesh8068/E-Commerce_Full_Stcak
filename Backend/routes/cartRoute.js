import express from "express";
import {
  addToCart,
  updateCart,
  getUserCart,
} from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/add", addToCart);
cartRouter.post("/update", updateCart);
cartRouter.post("/get", getUserCart);

export default cartRouter;
