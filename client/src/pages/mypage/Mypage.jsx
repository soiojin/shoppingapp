import "./mypage.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Header";
import { AuthContext } from "../../context/AuthContext";
import { useEffect, useContext, useState  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Mypage = () => {

    const [mpData, setMpData] = useState ({
        address: '',
        email: '',
        phone: '',
    });

    const [credentials, setCredentials ] = useState({
        address : undefined,
    });

    const { user, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setMpData({
                address: user.address,
                email: user.email,
                phone: user.phone,
            });
        }
    }, [user]);

    const handleSave = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const userId = user._id;
            const updatedData = { ...mpData };


            const res = await axios.put(`${apiUrl}/users/${userId}`, updatedData, { withCredentials: true });
       
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
       
            navigate("/mypage");

        } catch (err) {
            console.error(err);
            alert("프로필 업데이트 중 오류가 발생했습니다.");
        }
    };

      
    const handleProfile = () => {
        window.location.href = '/mypage';
    }

    const handleChange = (e) => {
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
    };

    // const handleClick = async (e) => {
    //     e.preventDefault();
    //     dispatch({ type: "SAVE_START" });
    //     try {
    //         const apiUrl = process.env.REACT_APP_API_URL;
    //         const res = await axios.post(`${apiUrl}/users/${user._id}`, credentials);
    //         dispatch({ type: "SAVE_SUCCESS", payload: res.data.details});
    //         navigate("/mypage")
    //     } catch (err) {
    //         dispatch({ type: "SAVE_FAILURE", payload: err.response.data});
    //     }
    // };   

    return (
        <div>
            <Navbar />
            <div className="body">
                <div className="page-container">
                    <div className="basic-container">
                        <h1 className="pageTitle">basic</h1>
                        <p className="pagethank">저희 쇼핑몰을 이용해주셔서 감사합니다. <strong>{user.username}</strong> 님은 [basic] 회원이십니다.<br>
                        </br><strong>0원 이상</strong> 구매시 1%을 추가적립 받으실 수 있습니다.</p>
                    </div>
                    <div className="page-body">
                        <div className="page">
                            <div className="pagelabel" onClick={handleProfile}>Profile</div><hr></hr>
                            <div className="pagelabel">Order</div><hr></hr>
                            <div className="pagelabel">Review</div><hr></hr>
                        </div>
                        <form className="mypage-container">
                            <div className="pageinfo">
                                <strong>기본 정보</strong>
                            </div>
                            <table className="pagetable">
                                <tbody>
                                   <tr>
                                        <th>아이디</th>
                                        <td><input type="text" class="textbox" value={user.id} disabled /></td>
                                    </tr> 
                                    <tr>
                                        <th>이름</th>
                                        <td><input type="text" class="textbox" value={user.username} disabled /></td>
                                    </tr> 
                                    <tr>
                                        <th>주소</th>
                                        <td>{user.address ? (<input type="text" class="textbox" value={user.address} disabled />) : 
                                        (<input type="text" 
                                        id="address"
                                        className="textbox"
                                        onChange={handleChange}
                                        />)}
                                        </td>
                                    </tr> 
                                    <tr>
                                        <th>휴대전화</th>
                                        <td><input type="text" class="textbox" value={user.phone} disabled /></td>
                                    </tr> 
                                    <tr>
                                        <th>이메일</th>
                                        <td><input type="text" class="textbox" value={user.email} disabled /></td>
                                    </tr> 
                                </tbody>
                            </table>
                            <div className="jsignupbutton-container">
                                <button type="submit" className="pagesavebutton" onClick={handleSave}>SAVE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Mypage