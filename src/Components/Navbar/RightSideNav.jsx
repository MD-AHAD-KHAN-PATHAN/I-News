
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone1 from '../../assets/qZone1.png';
import Qzone2 from '../../assets/qZone2.png';
import Qzone3 from '../../assets/qZone3.png';

const RightSideNav = () => {



    return (
        <div>
            <div className='p-4 space-y-2 mb-6'>
            <h2 className='text-lg font-semibold'>Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>

            <div className='p-4 space-y-2'>
                <h2 className='text-lg font-semibold'>Find Us On</h2>
                <a href='' className="btn btn-outline w-full">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a href='' className="btn btn-outline w-full">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a href='' className="btn btn-outline w-full">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>

            <div className='p-4 space-y-2'>
                <h2 className='text-lg font-semibold'>Q Zone</h2>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;