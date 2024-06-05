import express from "express";
import { login, join, logout } from "../controllers/auth.js";

const router = express.Router();

router.post("/join", join)
router.post("/login",login)
router.post("/logout",logout)

export default router