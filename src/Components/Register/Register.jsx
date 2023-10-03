import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {

    const { userRegister } = useContext(AuthContext);
    
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photoUrl = form.get('photoUrl')
        const email = form.get('email');
        const password = form.get('password');
        
        userRegister(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">

                        <form className="card-body" onSubmit={handleRegister}>
                            <h1 className="text-3xl font-bold">Register your account</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input type="name" name="name" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="Enter your photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email address</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <div className="flex mt-2">
                                    <input type="checkbox" className="checkbox mr-2" />
                                    <p>Accept Term & Conditions</p>
                                </div>
                            </div>
                            <div className="form-control my-6">
                                <button className="btn btn-neutral">Register</button>
                            </div>
                            <p className="text-center">Already Have An Account ? <Link to='/login' className="text-red-600 font-semibold">Login</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Register;