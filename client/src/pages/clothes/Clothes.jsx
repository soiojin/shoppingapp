import "./clothes.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Clothes = () => {

    const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;

  const { data, loading } = useFetch(`${apiUrl}/clothess/find/${id}`);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const showAlert = () => {
    alert("장바구니에 추가되었습니다.");
  };

    return (
        <div>
            <Header />
            <div className="container2">
                <div className="item1">
                    {/* <img
                        src={data.photos}
                        alt=""
                        className="sliderImg"
                    /> */}
                    <img
                        src="https://cafe24.poxo.com/ec01/tlwls0922/3JPAsJn/jGkesyYvH/tEad8ShqUrSIUHyBV1Z4BqJ9oSnKFswsANDLgomKfa57vY076aamLOTmylFwWx68eCqA==/_/web/product/big/202404/b34f02d918f66d8532ad245849f2038e.jpg"
                        alt=""
                        className="sliderImg"
                    />
                    <img
                        src="https://cafe24.poxo.com/ec01/tlwls0922/3JPAsJn/jGkesyYvH/tEad8ShqUrSIUHyBV1Z4BqJ9oSnKFswsANDLgomKfa57vY076aamLOTmylFwWx68eCqA==/_/web/upload/NNEditor/20240429/ed03750403fec369bf2dd474e7002c0c.jpg"
                        alt=""
                        className="sliderImg"
                    />
                    <img
                        src="https://cafe24.poxo.com/ec01/tlwls0922/3JPAsJn/jGkesyYvH/tEad8ShqUrSIUHyBV1Z4BqJ9oSnKFswsANDLgomKfa57vY076aamLOTmylFwWx68eCqA==/_/web/upload/NNEditor/20240429/7e08720878e9d092dced37efb3014874.jpg"
                        alt=""
                        className="sliderImg"
                    />
                    <img
                        src="https://cafe24.poxo.com/ec01/tlwls0922/3JPAsJn/jGkesyYvH/tEad8ShqUrSIUHyBV1Z4BqJ9oSnKFswsANDLgomKfa57vY076aamLOTmylFwWx68eCqA==/_/web/upload/NNEditor/20240429/15b540f577eb7866cdb0130d0c40404a.jpg"
                        alt=""
                        className="sliderImg"
                    />
                    <img
                        src="https://cafe24.poxo.com/ec01/tlwls0922/3JPAsJn/jGkesyYvH/tEad8ShqUrSIUHyBV1Z4BqJ9oSnKFswsANDLgomKfa57vY076aamLOTmylFwWx68eCqA==/_/web/upload/NNEditor/20240429/d6190acdb4cb7af33d9a6490abdc486e.jpg"
                        alt=""
                        className="sliderImg"
                    />
                </div>
                <div className="item2">
                    <div className="element">
                        <strong className="cname">PLAIN POLD FLARE SKIRT SHORTS BLACK</strong><br></br>
                        <p className="cprice">41,000원</p>
                    </div>
                    <div className="contents">
                        <div id="view1" className="view1">
                            <p className="c">FABRIC</p>
                            <p>폴리에스테르 68% 레이온 26% 스판 6%</p><br></br>
                            <p> - 드라이클리닝 권장<br></br>
                                - 건조기 사용시 원단이 수축될 수 있으므로 반드시 자연 건조 해주세요.<br></br>
                                - 어두운 컬러의 경우 이염에 주의해주세요.<br></br>
                                - 실제 상품의 색상은 상품 상세이미지와 가장 흡사하며, 모니터에 따라 컬러의 오차가 있을 수 있습니다.
                            </p><br></br>
                            <p className="c">DETAILS</p>
                            <p> - 플랫 디자인으로 원하는 허리선 연출 가능<br></br>
                                - 플레어 스커트가 레이어드된 쇼츠<br></br>
                                - 잦은 착용 시에도 보풀이 적은 ECOSIL 원단
                            </p>
                        </div><br></br>
                        <div id="view2" className="view2">
                            <p className="c">SIZE GUIDE</p>
                            <p>FREE</p><br></br>
                            <p>허리 28 엉덩이 42 허벅지 23</p><br></br>
                            <p>상세 사이즈 치수는 측정 방법에 따라 1-3cm 오차가 있을 수 있습니다.</p>
                        </div>
                        <div id="view3" className="view3">
                            <button type="submit" className="cartbutton" onClick={showAlert}>ADD CART</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Clothes