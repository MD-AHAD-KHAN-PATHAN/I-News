import Header from "../Header/Header";
import LeftSideNav from "../Navbar/LeftSideNav";
import Navbar from "../Navbar/Navbar";
import RightSideNav from "../Navbar/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {



    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid md:grid-cols-4 gap-6">

                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="md:col-span-2 border">
                    <h1>News Coming Soon</h1>
                </div>

                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default Home;