import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import cookieParser from "cookie-parser";
import cors from "cors";

import authRoute from "./routes/auth.js";
import clothessRoute from "./routes/clothess.js";
import usersRoute from "./routes/users.js";

const app = express() // Express 애플리케이션 인스턴스 생성
dotenv.config(); // 환경 변수 로드

// MongoDB 연결 함수
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};


// MongoDB 연결 해제 이벤트 핸들러
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

const Clothing = mongoose.model('Clothing', {
    name: String,
    price: Number,
    image: String
  });


// 미들 웨어 설정
// 이 코드는 모든 도메인에서의 요청을 허용하는 기본 CORS 설정을 사용합니다.
const corsOptions = {
    origin: 'http://localhost:3000', // 클라이언트 url
    credentials: true, // 자격 증명 허용
  }
app.use(cors(corsOptions))
// 클라이언트로부터 전송된 쿠키를 파싱하여 req.cookies 객체에 저장합니다.
app.use(cookieParser())
// JSON 요청 본문 파싱 미들웨어 설정
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/clothess", clothessRoute);

// 옷 데이터 조회 엔드포인트
app.get('/api/clothes', async (req, res) => {
    try {
      const clothes = await Clothing.find();
      res.json(clothes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// 전역 오류 처리를 위한 코드
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

// 서버 시작 및 MongoDB 연결 시도
app.listen(process.env.PORT, () => {
    connect();
    console.log("Connected to backend.");
});

