import "./login.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    
    const handleSignupClick = (e) => {
        e.preventDefault();
        window.location.href = '/join';
      }

    const [credentials, setCredentials ] = useState({
        id: undefined,
        password: undefined,
    });

    const { error, dispatch} = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const res = await axios.post(`${apiUrl}/auth/login`, credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details});
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data});
        }
    };    

    return (
        <div>
            <Header />
            <div className="login-body">
                <form className="login-form">
                    <fieldset className="login-container">
                        <p className="login-title">LOG IN</p>
                        <div className="input-group">
                            <input type="text" 
                                    placeholder="  ID" 
                                    id="id"
                                    onChange={handleChange}
                                    className="lInput"
                            />
                        </div>
                        <div className="input-group">
                            <input type="password" 
                                    placeholder="  PASSWORD"
                                    id="password"
                                    onChange={handleChange}
                                    className="lInput" 
                            />
                        </div>
                        {error && <span>{error.message}</span>}
                        <div className="loginbutton-container">
                            <button type="submit" className="login-button" onClick={handleClick}>LOG IN</button>
                            <button type="submit" className="lsignupbutton" onClick={handleSignupClick}>JOIN US</button>
                        </div>
                        
                        <br></br>
                        <div className="forgot">
                            <ul className="forgotlist">
                                <li>✓ FORGOT ID</li>
                                <li>✓ FORGOT PASSWORD</li>
                                <li>✓ ORDER CHECK</li>
                            </ul>
                        </div>
                    </fieldset>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login