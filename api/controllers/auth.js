import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const join = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        
        const newUser = new User({
            ...req.body,
            password: hash,
        });
        
        await newUser.save();
        res.status(200).send("User has been created.");
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ id: req.body.id });
        if (!user) return next(createError(404, "User not found!"));
    
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect)
            return next(createError(400, "Wrong password or id!"));
    
        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT
        );
        
        // user._doc 실제 데이터만 포함하는 순수 JavaScript 객체
        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, {
                httpOnly: true,
                path:'/',
                sameSite:'strict',
            })
            .status(200)
            .json({ details: { ...otherDetails }, isAdmin });
    } catch (err) {
        next(err);
    }
};

export const logout = (req, res) => {
    res.clearCookie("access_token", {
      httpOnly: true,
      // 프로덕션 환경에서는 secure 옵션을 활성화
      secure: process.env.NODE_ENV === "production",
      path: '/',
      // 동일한 사이트의 요청에서만 처리되도록
      sameSite: "strict",
     })
     .status(200)
     .json({ message: "Logged out successfully" });
};
       