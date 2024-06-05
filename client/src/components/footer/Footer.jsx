import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">AM 10:00 - PM 6:00</li>
          <li className="fListItem">토, 일, 공휴일 휴무</li>
          <li className="fListItem">유선상담은 운영되지 않으며,</li>
          <li className="fListItem">Q & A를 통해 운영되고 있습니다.</li>
          <li className="fListItem">CONTACT.myday@gmail.com</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">HOME </li>
          <li className="fListItem">GUIDE</li>
          <li className="fListItem">PRIVACY POLICY</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">COMAPANY.MYDAY</li>
          <li className="fListItem">OWNER.장수진 BUSINESS NUMBER.02-1124</li>
          <li className="fListItem">ADDRESS.</li>
          <li className="fListItem">Copyright © MYDAY All rights reserved.</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;