import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import './header.css';
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';



const Header = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [showCategories2, setShowCategories2] = useState(false);
    const [showCategories3, setShowCategories3] = useState(false);
    const [cateno, setCateno] = useState();
    const [collectno, setCollectno] = useState();

    const navigate = useNavigate();

    const toggleCategories = () => {
        setShowCategories(!showCategories);
    };

    const toggleCategories2 = () => {
        setShowCategories2(!showCategories2);
    };

    const toggleCategories3 = () => {
        setShowCategories3(!showCategories3);
    };

    const { user, dispatch } = useContext(AuthContext);

    const handleLoginClick = () => {
        window.location.href = '/login';
    };

    const handlePageClick = () => {
        window.location.href = '/mypage';
    }

    const handleNoticeClick = () => {
        window.location.href = '/notice';
    }
 
    const handleLogoutClick = async (e) => {
        e.preventDefault();
        try {
          console.log("logout")
          const apiUrl = process.env.REACT_APP_API_URL;
          console.log("apiurl",apiUrl)
          const res = await axios.post(`${apiUrl}/auth/logout`, {}, {withCredentials: true})
          dispatch({ type: "LOGOUT" });
          navigate("/");
          console.log(res.data);
        } catch (err) {
          console.log(err);
        }
    };

    const handleHomeClick = () => {
    window.location.href = '/';
    };

    const handleSearch1 = () => {
        // NEW_SEARCH: 새로운 검색 결과를 상태에 저장합니다.
        dispatch({ type: "NEW_SEARCH", payload: { cateno } });
        // state에 정보를 담아 /hotels 화면이동한다. 
        navigate("/clothess", { state: { cateno } });
    };

    const handleSearch2 = () => {
        // NEW_SEARCH: 새로운 검색 결과를 상태에 저장합니다.
        dispatch({ type: "NEW_SEARCH", payload: { collectno } });
        // state에 정보를 담아 /hotels 화면이동한다. 
        navigate("/clothess", { state: { collectno } });
    };

    const handlecollection = () => {
        window.location.href = '/collectionlist';
    }


    return (
        <div className="header-header">
        <div className="navContainer">
                <div className="logo" onClick={handleHomeClick} >MyDay</div>
                <div  className="navItems">
                    {user ? 
                    (<button className="navButton" onClick={handleLogoutClick}>LOG OUT</button>):
                    (<button className="navButton" onClick={handleLoginClick}>SIGN IN</button>)}/
                    <button className="navButton">CART</button><br></br>
                    
                    <button className="navButton" onClick ={handlePageClick}>MYPAGE</button>/
                    <button className="navButton">SEARCH</button>
                </div>
        </div>
        <div className="shop-container">
            <button onClick={toggleCategories} className="toggle">
                SHOP
            </button>
            {showCategories && (
                <div className="categories">
                    <div className="category">
                        <button className="shoplist" onClick={handleSearch1}>ALL</button><br></br>
                        <button className="shoplist" onClick={handleSearch1}>OUTERWEAR</button><br></br>
                        <button className="shoplist" onClick={handleSearch1}>TOPS</button><br></br>
                        <button className="shoplist" onClick={handleSearch1}>BOTTOMS</button><br></br>
                        <button className="shoplist" onClick={handleSearch1}>DRESSES</button><br></br>
                        <button className="shoplist" onClick={handleSearch1}>BAGS</button><br></br>
                        <button className="shoplist" onClick={handleSearch1}>SHOES</button><br></br>
                        <button className="shoplist" onClick={handleSearch1}>ACCESSORIES</button>
                    </div>
                </div>
            )}
        </div>
        <div className="collection-container">
            <button onClick={toggleCategories2} className="toggle">
                COLLECTION
            </button>
            {showCategories2 && (
                <div className="categories">
                    <div className="category">
                        <button className="collectionlist" onClick={handlecollection}>2024 PLAIN </button><br></br>
                        <button className="collectionlist" onClick={handleSearch2}>2024 S / S</button><br></br>
                    </div>
                </div>
            )}
        </div>
        <div className="collection-container">
            <button className="toggle">
                NEW IN
            </button>
        </div>
        <div className="community-container">
            <button onClick={toggleCategories3} className="toggle">
                COMMUNITY
            </button>
            {showCategories3 && (
                <div className="categories">
                    <div className="category">
                        <button className="communitylist" onClick={handleNoticeClick}>NOTICE</button><br></br>
                        <button className="communitylist">Q & A</button>
                    </div>
                </div>
            )}
        </div>
        
        </div>
    )
}

export default Header;
