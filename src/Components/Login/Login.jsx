import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {

    const { userLogin } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
        .then(result => {
            console.log('user login successfully');
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

                        <form className="card-body" onSubmit={handleLogin}>
                            <h1 className="text-3xl font-bold">Login your account</h1>
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
                            </div>
                            <div className="form-control my-6">
                                <button className="btn btn-neutral">Login</button>
                            </div>
                            <p className="text-center">Dont’t Have An Account ? <Link to='/register' className="text-red-600 font-semibold">Register</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;