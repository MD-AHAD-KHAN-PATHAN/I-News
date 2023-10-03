import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategorys(data))

    }, [])


    return (

        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold">All Caterogy</h1>
            <div className="ml-6 space-y-4">
                {
                    categorys.map(category => <NavLink className="block text-xl font-semibold" key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>


        </div>

    );
};

export default LeftSideNav;