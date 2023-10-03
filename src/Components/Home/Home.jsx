import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import LeftSideNav from "../Navbar/LeftSideNav";
import Navbar from "../Navbar/Navbar";
import RightSideNav from "../Navbar/RightSideNav";
import BreakingNews from "./BreakingNews";
import News from "./News";

const Home = () => {

    const news = useLoaderData();


    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid md:grid-cols-4 gap-6">

                <div>
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="md:col-span-2">
                    {
                        news.map(aNews => <News key={aNews._id} aNews={aNews}></News>)
                    }
                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default Home;