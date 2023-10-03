import logo from "../../assets/logo.png";
import moment from 'moment';

const Header = () => {


    return (
        <div className="flex justify-center items-center text-center">
            <div>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;