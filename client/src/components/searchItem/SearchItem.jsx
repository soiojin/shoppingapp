import { Link } from "react-router-dom";
// import "./searchItem.css";

const SearchItem = ({ item }) => {
    return (
         <Link to={`/clothess/${item._id}`}>
            <div className="searchItem">
                <img src={item.photos[0]} alt="" className="siImg" />
                <div className="siDesc">
                    <h1 className="siTitle">{item.name}</h1>
                    <span className="siPrice">${item.price}</span>
                </div>
             </div>
        </Link>
 );
};
export default SearchItem;
