import express from "express";
import {
    countByType,
    createClothes,
    deleteClothes,
    getClothes,
    getClothess,
    updateClothes,
} from "../controllers/clothes.js";
import Clothes from "../models/Clothes.js";
import { verifyAdmin } from "../utils/verifyToken.js";
 
const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createClothes);

// UPDATE
router.put("/:id", verifyAdmin, updateClothes);

// DELETE
router.delete("/:id", verifyAdmin, deleteClothes);

// GET
router.get("/find/:id", getClothes);

// GET ALL
router.get("/", getClothess);
router.get("/countByType", countByType);

export default router;