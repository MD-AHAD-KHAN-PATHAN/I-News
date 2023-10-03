import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Register = () => {


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);
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
                                <input type="text" name="text" placeholder="Enter your photo url" className="input input-bordered" required />
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