import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./home.css";

const Home = () => {
    
    return (
        <div>
            <Header className="main-header" />
            <div className="mainimg-content">
                <img src="https://cafe24.poxo.com/ec01/tlwls0922/3JPAsJn/jGkesyYvH/tEad8ShqUrSIUHyBV1Z4BqJ9oSnKFswsANDLgomKfa57vY076aamLOTmylFwWx68eCqA==/_/web/product/big/202404/54f656e1bea71b9a7e82a8aaf5877613.jpg" alt="" className="homemainimg"></img>
            </div>
            <Footer />
        </div>
    );
};

export default Home;

