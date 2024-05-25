import express from "express";
import {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

