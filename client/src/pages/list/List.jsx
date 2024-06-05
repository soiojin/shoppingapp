import "./list.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
const List = () => {

    const location = useLocation();
    const [clothes, setClothes] = useState([]);

    const [cateno, setCateno] = useState(location.state.cateno);
    const [colletno, setColletno] = useState(location.state.colletno);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const apiUrl = process.env.REACT_APP_API_URL;

    // 서버에게 clothes 정보요청
    const { data, loading, error, reFetch } = useFetch(
    `${apiUrl}/clothess?cate_no=${cateno}&collect_no=${colletno}&min=${min || 0}&max=${max || 999999}`
    );
    
    return (
      <div>
        <Header />
        <div className="listResult">

            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        <Footer />
      </div>
    );
}

export default List;