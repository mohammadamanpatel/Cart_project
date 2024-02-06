import { NavLink } from 'react-router-dom';
import ecomLogo from '../assests/logo.jpg'
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
function Navbar() {
    const { cart } = useSelector((state) => state)
    return (
        <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
            <NavLink to="/">
                <div className="ml-5">
                    <img src="https://logo.com/image-cdn/images/kts928pd/production/0089b7ae1ed394f041c5f7929e111c11e8eafe4d-424x421.png?w=1080&q=72" alt='logo' className="h-12" />
                </div>
            </NavLink>
            <div className='flex items-center gap-3'>
                <NavLink to="/">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/Cart">
                    <div className="relative">
                        <FaCartShopping className="text-2xl" />
                        {
                            cart.length > 0 &&
                            <span
                                className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                            >{cart.length}</span>
                        }

                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default Navbar