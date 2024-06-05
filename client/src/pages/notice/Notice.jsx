import "./notice.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Notice = () => {

    return (
        <div>
            <Header />
            <div className="notibody">
                <label >NOTICE</label>
                <table className="notitable">
                    <tbody>
                        <tr>
                            <td>NO</td>
                            <td>SUBJECT</td>
                            <td>NAME</td>
                        </tr>
                        <tr>
                            <td>공지</td>
                            <td><strong>마이데이 멤버쉽 제도 안내</strong></td>
                            <td>마이데이</td>
                        </tr>
                    </tbody>
                </table>
                <label className="notisearch">검색결과가 없습니다.</label>
            </div>
            <Footer />
        </div>
    )
}

export default Notice