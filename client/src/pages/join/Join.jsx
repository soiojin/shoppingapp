import "./join.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Join = () => {

    const [credentials, setCredentials ] = useState({
        id: undefined,
        password: undefined,
        username: undefined,
        email: undefined,
        phone: undefined,
    });

    const {dispatch} = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "REGISTER_START" });
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const res = await axios.post(`${apiUrl}/auth/join`, credentials);
            dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details});
            navigate("/login")
        } catch (err) {
            dispatch({ type: "REGISTER_FAILURE", payload: err.response.data});
        }
    };   

    return (
        <div>
            <Header/>
            <div className="register-body">
                <div className="register-container">
                    <form className="register-form">
                        <p className="registerTitle">BASIC INFORMATION</p>
                        <div className="form-group">
                            <label className="idlable">ID
                                <span class="required">*</span>
                                <span class="hint">(영문소문자/숫자, 4~16자)</span>
                            </label>
                            <input type="text" 
                                id="id"
                                className="rInput"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="pwlable">PASSWORD
                                <span class="required">*</span>
                                <span class="hint">(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자)</span>
                            </label>
                            <input type="password" 
                                className="rInput"
                                id="password"
                                onChange={handleChange}
                            />
                        </div> 
                        <div className="form-group">
                            <label className="idlable">NAME<span class="required">*</span></label>
                            <input type="text" 
                                className="rInput"
                                id="username"
                                onChange={handleChange}
                            />
                        </div>  
                        <div className="form-group">
                            <label className="idlable">PHONE</label>
                            <input type="text" 
                                className="rInput"
                                id="phone"
                                onChange={handleChange}
                            />
                        </div>  
                        <div className="form-group">
                            <label className="idlable">E-MAIL<span class="required">*</span></label>
                            <input type="text" 
                                className="rInput"
                                id="email"
                                onChange={handleChange}
                            />
                        </div>  
                        <br></br><br></br>
                        <div className="agree">
                            <p className="registerTitle">AGREE ALL</p>
                        </div>
                        <div className="agreebox">
                            <div className="agreetable">
                                    <p className="incheck">
                                        <p className="agree1">[필수] 이용약관 동의</p>
                                        <p className="agree2"> 제 1조(목적)<br></br>
                                            이 약관은 시너진이 운영하는 시너진(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.
                                            ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」
                                        </p>
                                        <p className="agree3">이용약관에 동의하십니까? 
                                            <input type="checkbox" className="agreecheck2"/> 동의함</p>
                                    </p>
                               
                                    <p className="incheck">
                                        <p className="agree1">[필수] 개인정보 수집 및 이용 동의</p>
                                        <p className="agree2"> 1. 개인정보 수집목적 및 이용목적<br></br>
                                            가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산<br></br>
                                            콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 , 금융거래 본인 인증 및 금융 서비스                        이 약관은 시너진이 운영하는 시너진(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.
                                        </p>
                                        <p className="agree3">개인정보 수집 및 이용에 동의하십니까? 
                                            <input type="checkbox" className="agreecheck2"/> 동의함</p>
                                    </p>
                               
                            </div>                        
                        </div>
                        <div className="jsignupbutton-container">
                            <button type="submit" className="jsignupbutton" onClick={handleClick}>JOIN US</button>
                        </div>
                        

                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Join