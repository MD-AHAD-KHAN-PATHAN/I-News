import { Link } from "react-router-dom";

const News = ({aNews}) => {

    const { _id, title, image_url, details, } = aNews;

    return (
        <div className="mb-4 border p-4 rounded-lg">
            <p className="font-bold text-xl">{title}</p>
            <img className="my-4" src={image_url} alt="" />
            {
                details.length > 200 ? <p>{details.slice(0, 200)} <Link className="text-orange-400 font-bold" to={`/newsDetails/${_id}`}>Read more.....</Link> </p>: <p>{aNews.details}</p>
            }
        </div>
    );
};

export default News;